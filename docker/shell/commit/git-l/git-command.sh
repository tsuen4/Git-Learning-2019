#!/bin/bash

git config --global user.email "${userId}"
git config --global user.name "${userName}"

mkdir /hello-git
cd /hello-git
git init
