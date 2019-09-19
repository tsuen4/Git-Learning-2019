#!/bin/bash

git config --global user.email "${userId}"
git config --global user.name "${userName}"

mkdir /hello-git
cd /hello-git
git init

echo "hello" > hello.txt
git add hello.txt
git commit -m "はじめてのコミット"
