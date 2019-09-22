#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if git log --decorate | grep -E "\s+追加" -q ; then
    echo "NG: 直前コミットのコミットメッセージが変更されていません。"
    flag=1
    amend="\"correct\": 0"
else
    echo "OK: 直前コミットのコミットメッセージが変更されています。"
    let ++count
    amend="\"correct\": 1"
fi

if ! git log hoge.txt --decorate | grep 'master' -q; then
    echo "NG: 'hoge.txt' が直前のコミットに追加されていません。"
    flag=1
    no_edit="\"correct\": 0"
else
    echo "OK: 'hoge.txt' が直前のコミットに追加されています。"
    let ++count
    no_edit="\"correct\": 1"
fi

echo -e "\n正解数: $count/2"

# curl -X POST host.docker.internal:3000/tutorial/api/scoring/amend -H "Content-Type: application/json" -d "{${id}, ${amend}}"
# curl -X POST host.docker.internal:3000/tutorial/api/scoring/no_edit -H "Content-Type: application/json" -d "{${id}, ${no_edit}}"
curl -X POST 192.168.163.225/tutorial/api/scoring/amend -H "Content-Type: application/json" -d "{${id}, ${amend}}"
curl -X POST 192.168.163.225/tutorial/api/scoring/no_edit -H "Content-Type: application/json" -d "{${id}, ${no_edit}}"

exit $flag