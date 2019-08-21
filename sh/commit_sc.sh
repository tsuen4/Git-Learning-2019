#!/bin/bash

flag='0'

if ! git log hello.txt &> /dev/null ; then
    echo "hello.txt がコミットされていません。"
    flag='1'
fi

exit $flag