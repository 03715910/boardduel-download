# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。Ver.9.25ではONOのドパガキ宣言の猶予を5秒に短縮しました。クイズ（1問5秒・10問連続正解）や通常の手番時計、オンライン再戦の仕様は変更していません。内部の`versionCode`は37。通信スキーマとFirebase Rulesは維持し、同じ署名で上書き更新できます。オンラインではホストを含め全員の更新を推奨します。
