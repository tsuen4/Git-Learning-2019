#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! git remote -v | grep hello-git.git -q; then
    echo "NG: GitHub 上の 'hello-git' リポジトリがリモート先 'origin' に追加されていません。"
    flag=1
    remote="\"correct\": 0"
else
    echo "OK: GitHub 上の 'hello-git' リポジトリがリモート先 'origin' に追加されています。"
    let ++count
    remote="\"correct\": 1"
fi

if ! git log --decorate | grep 'master, origin/master' -q; then
    echo "NG: リモート先にプッシュされていません。"
    flag=1
    push="\"correct\": 0"
else
    echo "OK: リモート先にプッシュされています。"
    let ++count
    push="\"correct\": 1"
fi

echo -e "\n正解数: $count/2"

# curl -X POST host.docker.internal:3000/api/scoring/remote -H "Content-Type: application/json" -d "{${id}, ${remote}}"
curl -X POST 192.168.163.225/api/scoring/remote -H "Content-Type: application/json" -d "{${id}, ${remote}}"
# curl -X POST host.docker.internal:3000/api/scoring/push -H "Content-Type: application/json" -d "{${id}, ${push}}"
curl -X POST 192.168.163.225/api/scoring/push -H "Content-Type: application/json" -d "{${id}, ${push}}"

exit $flag