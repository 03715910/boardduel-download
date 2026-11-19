# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。Ver.10.0では新ゲーム「七煌麻雀（仮称）」のPhase 1・基礎確認版を追加しました。136牌、ツモ/打牌、基本役と点数、流局を手動4席で試せます。正式対戦版ではなく、CPU・オンライン・役ナビ・完成版演出は未実装です。既存のオセロ・将棋・ONOは維持しています。内部の`versionCode`は39。同じ署名で上書き更新できます。今回の更新にFirebase設定変更は不要です。
