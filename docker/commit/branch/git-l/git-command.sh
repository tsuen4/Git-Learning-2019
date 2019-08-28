#!/bin/bash

mkdir hello-git
cd hello-git
git init
echo "hello" > hello.txt
git add hello.txt
git commit -m "はじめてのコミット"
