#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! git log hello.txt &> /dev/null ; then
    echo "NG: 'hello.txt' がコミットされていません。"
    flag=1
    commited="\"commited\": 0"
else
    echo "OK: 'hello.txt' がコミットされています。"
    let ++count
    commited="\"commited\": 1"
fi

echo -e "\n正解数: $count/1\n"

curl -X POST host.docker.internal:3000/api/scoring/commit -H "Content-Type: application/json" -d "{${id}, ${commited}}"

exit $flag