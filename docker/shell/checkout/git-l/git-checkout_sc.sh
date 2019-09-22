#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! cat hello.txt | grep 'edit on edit-hello branch' -q; then
    echo "NG: 作業が取り消されていません。"
    flag=1
    checkout="\"correct\": 0"
else
    echo "OK: 作業が取り消されています。"
    let ++count
    checkout="\"correct\": 1"
fi

echo -e "\n正解数: $count/1"

curl -X POST 192.168.163.225/tutorial/api/scoring/checkout -H "Content-Type: application/json" -d "{${id}, ${checkout}}"

exit $flag