#!/bin/bash

flag='0'

if ! git branch | grep edit-hello -q; then
    echo "'edit-hello' ブランチが作成されていません。"
    flag='1'
fi

if ! git log --decorate | grep 'master, edit-hello' -q; then
    echo "edit-hello ブランチが master ブランチにマージされていません。"
    flag='1'
fi

exit $flag