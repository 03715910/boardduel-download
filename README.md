# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。現在のVer.9.21はONOの勝ち抜け後の全手札観戦・数字1枚からの10秒宣言窓の保護・出せるカードの任意温存ドロー即終了の改善です。内部の`versionCode`は33。カード効果・CPU方針・勝利条件は維持しています。勝ち抜け後の手札を理解しない旧版との混在を防ぐため、新しいONO部屋はschema4です。全員更新後に新しい部屋を作ってください。旧部屋からの退出と、同じ署名での上書き更新は維持します。
