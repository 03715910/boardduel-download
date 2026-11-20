# BoardDuel Download

BoardDuel Android版の公式ダウンロードページです。

- Webサイト: <https://03715910.github.io/boardduel-download/>
- 最新APK: <https://03715910.github.io/boardduel-download/BoardDuel.apk>

APKはこのリポジトリの`BoardDuel.apk`として公開します。
新しい版を公開するときは、アプリの`versionCode`と`versionName`を更新し、同じリリース署名鍵でビルドしてから、このリポジトリの`version.json`と画面上のバージョン表示を更新します。

`BoardDuel.apk`はGitHub Pagesから直接配信します。更新時はAPK本体に加えて、`version.json`のサイズとSHA-256も必ず同時に更新します。

表示バージョンは大型追加で整数を更新し、中程度の追加・重要修正は0.1程度、小修正は0.01程度を使います。作業パートごとに整数を増やしません。Ver.10.2では七煌麻雀のPhase 3〜8を追加しました。横画面の手牌操作・役ナビ、1人＋CPU3人、最大4人オンライン、途中退出/切断時のCPU代行、オリジナル牌、18項目の操作チュートリアル、BGM/SE/役別演出と軽減設定に対応します。役ナビの作りやすさ・途中の点数は前提付きの目安です。オンラインは処理担当端末を信頼する友人間の対戦方式で、改造された処理担当から全牌を秘匿する保証はありません。既存のオセロ・将棋・ONOとホームの上下スクロールを維持しています。内部の`versionCode`は41。同じ署名で上書き更新できます。Firebase Rulesには`mahjongRooms`だけを追加し、既存ゲームのルールは変更していません。旧Ver.10.0の保存対局は旧ルールのまま再開します。
