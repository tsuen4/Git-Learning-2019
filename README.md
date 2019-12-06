# Git-Learning (tutorial)

Node.js を使用して開発した Git 学習 Web アプリケーション。大学の授業で使用された。

![Git-Learning](https://i.imgur.com/4mPJam1.png)

## フロントエンド部

- フレームワークは [Vue.js](https://jp.vuejs.org/) を使用
  - コンポーネント単位で開発が可能
  - 当時自分が慣れていたため
  - テンプレートは [Vue-CLI 3](https://cli.vuejs.org) で作成
- ターミナルの表示に [Xterm.js](https://github.com/xtermjs/xterm.js/) を使用
- サーバー上に起動した教材 Docker コンテナとの通信に [Socket.IO](https://socket.io/) を使用
- Google アカウントを扱うログイン処理に [firebase](https://firebase.google.com/?hl=ja) を使用

## バックエンド部

- サーバーは [Express](https://expressjs.com/ja/) を使用
  - Vue CLI 3.x プラグインの [vue-cli-plugin-express](https://github.com/mathieutu/vue-cli-plugin-express#readme) を導入
- 解答記録用のデータベースに [SQLite](https://www.sqlite.org/) を使用
- 教材 Docker コンテナの起動に [dockerode](https://github.com/apocas/dockerode) を使用
  - 各教材ごとに事前に準備されたコンテナを用意

## ディレクトリ構成

- docker/ にデプロイ用・各教材用の Dockerfile を保存
- web/ にフロントエンド部分の処理
- web/srv/ にバックエンド部分の処理

## 既知の問題点

- Google ログインする際の [Vuex](https://vuex.vuejs.org/ja/) での実装方法がまずいのか Edge でのログインができない
- 一部の課題内容が分かりづらい
  - 一部表現の変更を検討
  - 図説の追加を検討
- 採点前に何を採点するかを事前に書いていない
- 課題追加時に個別にファイルを追加する必要がある
  - 投稿フォームの追加を検討
- 「4.2 コミットのやり直し」の教材内容または実施する順番の見直し

## 開発時

- ターミナルを2つ起動し、web/ ディレクトリ上で Web サーバーと API サーバーを起動する。
- 各教材の Doker イメージは、プロジェクトルート上で `build_shell.sh` を実行してビルドする。

```bash
# クローン後の操作
npm install
npm install sqlite3 # 単体でインストールする必要有り

# API サーバーの起動 (localhost:3000)
npm run express # 先に！

# Web サーバーの起動 (localhost:8080)
npm run serve
```
