#!/bin/bash

docker build -t create-repository ./docker/shell/create-repository
docker build -t git-commit ./docker/shell/commit
docker build -t git-branch ./docker/shell/branch
docker build -t git-amend ./docker/shell/amend
docker build -t git-checkout ./docker/shell/checkout
docker build -t github-create-repository ./docker/shell/github-create-repository