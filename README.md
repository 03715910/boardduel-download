# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。現在のVer.9.23はオセロの局所修正です。育成でランダムを選んだ場合、再戦のたびに先攻・後攻を抽選し直します。同じ側が続くこともあり、固定選択は維持します。AI対AIでは盤の上に黒・先攻と白・後攻のAI名を表示し、オンラインでは手番・カットイン・石数・結果の色名を選択色に合わせます。内部の`versionCode`は35。将棋・ONO、学習則・AIの強さ・ゲームルール・オンライン通信・Firebase Rulesは変更していません。既存の部屋を使用でき、同じ署名で上書き更新できます。
