#!/bin/bash

docker build -t create-repository ./create-repository
docker build -t git-commit ./commit
docker build -t git-branch ./branch
docker build -t git-amend ./amend
# docker build -t git-branch ./branch