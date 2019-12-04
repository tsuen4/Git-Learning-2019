#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! git branch | grep edit-hello -q; then
    echo "NG: 'edit-hello' ブランチが作成されていません。"
    flag=1
    branch="\"correct\": 0"
else
    echo "OK: 'edit-hello' ブランチが作成されています。"
    let ++count
    branch="\"correct\": 1"
fi

if ! git log --decorate | grep 'master, edit-hello' -q; then
    echo "NG: 'edit-hello' ブランチが master ブランチにマージされていません。"
    flag=1
    merge="\"correct\": 0"
else
    echo "OK: 'edit-hello' ブランチが master ブランチにマージされています。"
    let ++count
    merge="\"correct\": 1"
fi

echo -e "\n正解数: $count/2"

curl -X POST git-learning.hisalab.net/tutorial/api/scoring/branch -H "Content-Type: application/json" -d "{${id}, ${branch}}"
curl -X POST git-learning.hisalab.net/tutorial/api/scoring/merge -H "Content-Type: application/json" -d "{${id}, ${merge}}"

exit $flag