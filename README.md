# OECU-Git-Learning

## 開発時

別々のターミナルで 2 つのコマンドを実行

プロジェクトルート上で以下のコマンドを実行すると、localhost:3000 で API サーバーが立ち上がる

```bash
docker-compose up --build
```

web ディレクトリ上で以下のコマンドを実行すると、 localhost:8080 で Web サーバーが立ち上がる

```bash
npm run serve
```

## デプロイ

プロジェクトルート上で

```bash
docker-compose -f docker-compose.prod.yml up -d
```
