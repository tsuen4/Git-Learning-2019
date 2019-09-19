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

echo "--amend オプションで直前のコミットに対してコミットメッセージを変更したり、ファイルの追加ができます。" > amend.txt
git add amend.txt
git commit -m "追加"

echo "追加を忘れられたテキストファイル" > hoge.txt