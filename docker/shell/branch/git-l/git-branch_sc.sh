#!/bin/bash

count=0
flag=0
id="\"id\": \"${userId}\""

echo -e "\n===== 採点結果 ====="

if ! git branch | grep edit-hello -q; then
    echo "NG: 'edit-hello' ブランチが作成されていません。"
    flag=1
    branch="\"branch\": 0"
else
    echo "OK: 'edit-hello' ブランチが作成されています。"
    let ++count
    branch="\"branch\": 1"
fi

if ! git log --decorate | grep 'master, edit-hello' -q; then
    echo "NG: 'edit-hello' ブランチが master ブランチにマージされていません。"
    flag=1
    merge="\"merge\": 0"
else
    echo "OK: edit-hello ブランチが master ブランチにマージされています。"
    let ++count
    merge="\"merge\": 1"
fi

echo -e "\n正解数: $count/2\n"

curl -X POST host.docker.internal:3000/api/scoring/branch -H "Content-Type: application/json" -d "{${id}, ${branch}, ${merge}}"


exit $flag