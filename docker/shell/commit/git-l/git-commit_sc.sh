#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! git log hello.txt &> /dev/null ; then
    echo "NG: 'hello.txt' がコミットされていません。"
    flag=1
    commited="\"correct\": 0"
else
    echo "OK: 'hello.txt' がコミットされています。"
    let ++count
    commited="\"correct\": 1"
fi

echo -e "\n正解数: $count/1"

curl -X POST git-learning.hisalab.net/tutorial/api/scoring/commit -H "Content-Type: application/json" -d "{${id}, ${commited}}"

exit $flag