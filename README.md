# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。現在のVer.9.24はONOオンライン再戦の局所修正です。再戦希望の保存後は「再戦希望中」と人数を表示し、他の参加者にも同期します。1人ではCPUがいても待機し、希望者2人以上と前試合の戦績受領完了を確認して、その時点の希望者だけで新しい対局を自動作成します。ホスト専用の別の開始操作は不要です。手札・山札・場札・順位・手番などは初期化されます。内部の`versionCode`は36。カード効果・CPU方針・観戦・戦績集計、オセロ・将棋は変更していません。通信スキーマ4とFirebase Rulesは維持し、同じ署名で上書き更新できます。ホスト/authorityも含め全員の更新を推奨します。
