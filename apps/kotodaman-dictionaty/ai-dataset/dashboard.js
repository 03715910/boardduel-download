(() => {
  "use strict";

  const config = window.AI_DATASET_CONFIG;
  const targetKana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん",
    "ゃ", "ゅ", "ょ", "っ",
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "ぢ", "づ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"
  ];

  const elements = {
    status: document.getElementById("loadStatus"),
    updatedAt: document.getElementById("updatedAt"),
    refresh: document.getElementById("refreshButton"),
    currentTotal: document.getElementById("currentTotal"),
    legacyTotal: document.getElementById("legacyTotal"),
    combinedTotal: document.getElementById("combinedTotal"),
    readyKanaCount: document.getElementById("readyKanaCount"),
    normalTotal: document.getElementById("normalTotal"),
    hintTotal: document.getElementById("hintTotal"),
    emptyTotal: document.getElementById("emptyTotal"),
    rows: document.getElementById("kanaRows"),
    search: document.getElementById("kanaSearch"),
    shortageOnly: document.getElementById("shortageOnlyButton"),
    showAll: document.getElementById("showAllButton"),
    emptyMessage: document.getElementById("emptyListMessage")
  };

  let shortageOnly = true;
  let latestRows = [];

  function safeLabel(kana) {
    return Array.from(kana)
      .map(character => `u${character.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}`)
      .join("_");
  }

  function normalizeSafeLabel(value) {
    return value
      .split("_")
      .map(part => `u${part.slice(1).toUpperCase()}`)
      .join("_");
  }

  function sumValues(values) {
    return Object.values(values || {}).reduce((sum, value) => sum + Number(value || 0), 0);
  }

  async function listObjects(prefix) {
    const all = [];
    const limit = 1000;
    let offset = 0;
    while (true) {
      const response = await fetch(
        `${config.supabaseUrl}/storage/v1/object/list/${config.bucket}`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            apikey: config.publishableKey,
            Authorization: `Bearer ${config.publishableKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prefix,
            limit,
            offset,
            sortBy: { column: "name", order: "asc" }
          })
        }
      );
      if (!response.ok) {
        throw new Error(`Supabase Storage: HTTP ${response.status}`);
      }
      const page = await response.json();
      all.push(...page);
      if (page.length < limit) {
        return all;
      }
      offset += limit;
    }
  }

  function isFile(entry) {
    return Boolean(entry && entry.id);
  }

  async function countLabelFolders(kind) {
    const root = `${config.currentPrefix}/${kind}`;
    const folders = (await listObjects(root)).filter(entry =>
      !isFile(entry) && /^u[0-9A-Fa-f]+(?:_u[0-9A-Fa-f]+)*$/.test(entry.name)
    );
    const entries = await Promise.all(folders.map(async folder => {
      const files = (await listObjects(`${root}/${folder.name}`)).filter(isFile);
      return [normalizeSafeLabel(folder.name), files.length];
    }));
    return Object.fromEntries(entries);
  }

  async function loadLiveCurrent() {
    const [emptyEntries, normal, hint] = await Promise.all([
      listObjects(`${config.currentPrefix}/empty`),
      countLabelFolders("kana"),
      countLabelFolders("hint")
    ]);
    const empty = emptyEntries.filter(isFile).length;
    return {
      empty,
      normal,
      hint,
      total: empty + sumValues(normal) + sumValues(hint)
    };
  }

  function combineRows(current, legacy) {
    return targetKana.map(char => {
      const label = safeLabel(char);
      const normal = Number(current.normal[label] || 0) + Number(legacy.normal[label] || 0);
      const hint = Number(current.hint[label] || 0) + Number(legacy.hint[label] || 0);
      const total = normal + hint;
      return {
        char,
        normal,
        hint,
        total,
        shortage: Math.max(0, config.minimumImagesPerKana - total),
        ready: total >= config.minimumImagesPerKana
      };
    });
  }

  function renderRows() {
    const query = elements.search.value.trim();
    const visibleRows = latestRows.filter(row =>
      (!shortageOnly || !row.ready) && (!query || row.char === query)
    );
    elements.rows.replaceChildren(...visibleRows.map(row => {
      const tr = document.createElement("tr");
      const statusText = row.ready ? "学習対象" : row.total === 0 ? "未収集" : "枚数不足";
      tr.innerHTML = `
        <td class="kana">${row.char}</td>
        <td>${row.normal}</td>
        <td>${row.hint}</td>
        <td class="total">${row.total}</td>
        <td>${row.shortage}</td>
        <td><span class="badge ${row.ready ? "ready" : "short"}">${statusText}</span></td>
      `;
      return tr;
    }));
    elements.emptyMessage.hidden = visibleRows.length > 0;
  }

  function render(current, baseline, live) {
    const legacy = baseline.legacy;
    const currentNormal = sumValues(current.normal);
    const currentHint = sumValues(current.hint);
    const legacyNormal = sumValues(legacy.normal);
    const legacyHint = sumValues(legacy.hint);
    latestRows = combineRows(current, legacy);

    elements.currentTotal.textContent = current.total;
    elements.legacyTotal.textContent = legacy.total;
    elements.combinedTotal.textContent = current.total + legacy.total;
    elements.readyKanaCount.textContent = `${latestRows.filter(row => row.ready).length} / ${targetKana.length}`;
    elements.normalTotal.textContent = currentNormal + legacyNormal;
    elements.hintTotal.textContent = currentHint + legacyHint;
    elements.emptyTotal.textContent = current.empty + legacy.empty;
    elements.status.textContent = live
      ? "最新の画像数を取得しました"
      : "Supabaseへ接続できないため、dataset_v003時点の画像数を表示しています";
    elements.updatedAt.textContent = `更新: ${new Date().toLocaleString("ja-JP")}`;
    renderRows();
  }

  async function refresh() {
    elements.refresh.disabled = true;
    elements.status.textContent = "画像数を確認しています...";
    try {
      const baselineResponse = await fetch(`./legacy-baseline.json?t=${Date.now()}`, { cache: "no-store" });
      if (!baselineResponse.ok) {
        throw new Error("集計基準データを読み込めませんでした");
      }
      const baseline = await baselineResponse.json();
      try {
        const current = await loadLiveCurrent();
        render(current, baseline, true);
      } catch (error) {
        console.error(error);
        render(baseline.snapshotCurrent, baseline, false);
      }
    } catch (error) {
      console.error(error);
      elements.status.textContent = "画像数を表示できませんでした。更新を押して再試行してください";
      elements.updatedAt.textContent = "";
    } finally {
      elements.refresh.disabled = false;
    }
  }

  elements.refresh.addEventListener("click", refresh);
  elements.search.addEventListener("input", renderRows);
  elements.shortageOnly.addEventListener("click", () => {
    shortageOnly = true;
    elements.shortageOnly.classList.add("selected");
    elements.showAll.classList.remove("selected");
    renderRows();
  });
  elements.showAll.addEventListener("click", () => {
    shortageOnly = false;
    elements.showAll.classList.add("selected");
    elements.shortageOnly.classList.remove("selected");
    renderRows();
  });

  refresh();
})();
