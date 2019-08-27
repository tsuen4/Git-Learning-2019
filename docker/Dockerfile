FROM alpine:3.10
LABEL maintainer="ht17a045"
ENV TZ Asia/Tokyo
# 日本語対応
ENV LANG="ja_JP.UTF-8" LANGUAGE="ja_JP:ja" LC_ALL="ja_JP.UTF-8"
# COPY docker-entrypoint.sh /usr/local/bin
# docker-entrypoint.sh の \r を消去
# RUN sed -i 's/\r//' /usr/local/bin/docker-entrypoint.sh
# リポジトリ一覧の更新 & bash のインストール
RUN apk update && \
    apk upgrade && \
    apk add bash
SHELL ["/bin/bash", "-c"]
# git と別に tzdata をインストール
RUN apk add --no-cache \
    tzdata
# git vim のインストール
RUN apk add --no-cache \
    git \
    vim && \
    rm -rf /var/cache/apk/*
# vi で vim を起動するエイリアスの設定
RUN echo -e "alias vi='vim'" >> $HOME/.bashrc && \
    . $HOME/.bashrc
# git の設定
RUN touch $HOME/.gitconfig && \
    git config --global user.email "student" && \
    git config --global user.name "student"
# ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["/bin/bash"]