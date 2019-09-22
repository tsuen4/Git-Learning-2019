#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! ls /hello-git/.git &> /dev/null; then
    echo "NG: '/hello-edit/' が作成されていなか、 Git のリポジトリとして初期化されていません。"
    flag=1
    create_repository="\"correct\": 0"
else
    echo "OK: '/hello-edit/' が Git のリポジトリとして初期化されています。"
    let ++count
    create_repository="\"correct\": 1"
fi

echo -e "\n正解数: $count/1"

curl -X POST 192.168.163.225/tutorial/api/scoring/create-repository -H "Content-Type: application/json" -d "{${id}, ${create_repository}}"

exit $flag