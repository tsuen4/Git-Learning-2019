#!/bin/bash

count=0
flag=0

if ! git branch | grep edit-hello -q; then
    echo "'edit-hello' ブランチが作成されていません。"
    flag=1
else
    let ++count
fi

if ! git log --decorate | grep 'master, edit-hello' -q; then
    echo "edit-hello ブランチが master ブランチにマージされていません。"
    flag=1
else
    let ++count
fi

echo "正解数: $count/2"

exit $flag