# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。現在のVer.9.22はONO勝ち抜け観戦の表示改善です。個別カード一覧ダイアログを廃止し、通常の対局画面に各プレイヤーの扇型手札を表示します。左右スワイプ・タップ/指なぞり拡大が可能で、カード操作は送信しません。内部の`versionCode`は34。ゲームルール・CPU・オンライン処理・手札公開範囲は維持し、schema4とFirebase Rulesを変更していません。Ver.9.21の部屋はそのまま使用でき、同じ署名で上書き更新できます。
