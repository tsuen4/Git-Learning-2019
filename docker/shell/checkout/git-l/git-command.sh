#!/bin/bash

git config --global user.email "${userId}"
git config --global user.name "${userName}"

mkdir /hello-git
cd /hello-git
git init

echo "hello" > hello.txt
git add hello.txt
git commit -m "はじめてのコミット"

git checkout -b edit-hello
echo "edit on edit-hello branch" >> hello.txt
git add hello.txt
git commit -m "edit-hello ブランチでのコミット"
git checkout master
git merge edit-hello

sed -i -e "2d" ./hello.txt
sed -i -e "s/hello/これは直前のコミットから追加された文です\nhello/g" ./hello.txt
echo "これは直前のコミットから追加された文です" >> hello.txt