# OECU-Git-Learning

## 開発時

別々のターミナルで 2 つのコマンドを実行

web ディレクトリ上で以下のコマンドを実行すると

- localhost:8080 で Web サーバー
- localhost:3000 で API サーバー

が立ち上がる

```bash
npm run express # 先に！
npm run serve
```

## デプロイ準備

プロジェクトルート上で

```bash
docker-compose -f docker-compose.prod.yml build --no-cache
```

## デプロイ

プロジェクトルート上で

```bash
# 開始
docker-compose -f docker-compose.prod.yml up -d
# 停止
docker-compose -f docker-compose.prod.yml down

# うまく止まってない課題用コンテナを停止
docker stop $(docker ps -q)
```
