#!/bin/bash

count=0
flag=0

if ! git log hello.txt &> /dev/null ; then
    echo "hello.txt がコミットされていません。"
    flag=1
else
    let ++count
fi
echo "正解数: $count/1"

exit $flag