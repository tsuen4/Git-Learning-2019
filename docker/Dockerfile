FROM alpine:3.10
LABEL maintainer="ht17a045"
ENV TZ Asia/Tokyo
ENV LANG="ja_JP.UTF-8" LANGUAGE="ja_JP:ja" LC_ALL="ja_JP.UTF-8"
RUN apk update && \
    apk upgrade && \
    apk add bash
SHELL ["/bin/bash", "-c"]
RUN apk add --no-cache \
    tzdata
RUN apk add --no-cache \
    git \
    vim && \
    rm -rf /var/cache/apk/* && \
    echo -e "export LANG=ja_JP.UTF-8\nalias vi='vim'" >> $HOME/.bashrc && \
    source $HOME/.bashrc
CMD ["/bin/bash"]