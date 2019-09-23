# GitHub へプッシュ

![GitHub-Logo](@/assets/text/img/GitHub-Mark-120px-plus.png)

GitHub とは Git のリポジトリをアップロードして、簡単にソースコードの共有や共同開発ができる Web サービスです。ローカルにあるリポジトリに対して、インターネット上にあるリポジトリのことを `リモートリポジトリ` といいます。

この問題の大まかな手順は 3 つで、以下のようになっています。

1. GitHub 上にリポジトリを作成
2. ローカルのリポジトリにリモートのリポジトリを紐付け
3. ローカルの情報を push(送信)

## 1. GitHub 上にリポジトリを作成

本授業ではリモートリポジトリを **Class of Advanced C++ Programming 2** という共有アカウント上に作成します。 GitHub を登録したメールアドレスに、 **@oecu-class-advanced-cpp2 organization** に参加するためのメールが届いていると思うので、そこから参加してください。

参加したら、 <a href="https://github.com/oecu-class-advanced-cpp2" target="_blank">https://github.com/oecu-class-advanced-cpp2</a> にアクセスしてください。

アクセスしたら、[Create a new repository] または [New] ボタンを選択してください。 Create a new repository の画面に遷移したら、今回は

- Owner は `oecu-class-advanced-cpp2` を選択
- Repository name は `学生番号-hello-git` の形で入力 → 例: `ht17a000-hello-git`
- Description(説明) は任意入力
- 公開範囲を `Public(公開)`
- README での初期化をしない (チェックしない)
- .gitignore と license は `None` のまま

の状態にし、 [Create Repository] を選択して作成します。

### 補足

`README.md` はプロジェクトに関する説明と、どう使えばいいのか、そしてどうやって貢献したらいいかを書くものです。(貢献方法については、別途 `CONTRIBUTING.md` というファイルに分けて書くこともあります。)

`.gitignore` はGitに追跡しないでほしいファイルの一覧です。例えば、パスワードの入ったファイル等

`license` ファイルは、プロジェクトに対するライセンスを定義します。

今回の場合は特に必要ありません。

## 2. ローカルリポジトリにリモートリポジトリを紐付け

空のリポジトリが生成されたら、画面上部に Quick setup があると思います。そこで `SSH` ではなく `HTTPS` ボタンを選択してください。(SSH は公開鍵の生成と GitHub への登録が必要なので、今回は使用しません。)

`HTTPS` を選択したら、右側からアドレスをコピーしてください。これは GitHub サーバ上におけるあなたのリポジトリのアドレスを表しています。今回は以下のようなアドレスになっていると思います。

例: `https://github.com/oecu-class-advanced-cpp2/ht17a000-hello-git.git`

コピーしたら画面下部のターミナルで、 **Git のリポジトリに GitHub のリポジトリの場所を登録** しましょう。それぞれに別の名前をつけることで、複数のリモートを設定することもできます。メインのリモートサーバに対しては、通常 `origin` と名付けることが慣習となっています。

```bash
# 'hello-git' ディレクトリ内から始まります
# '<' と '>' は入力する必要はありませんので注意してください
# このターミナルでの貼り付けのショートカットは [Ctrl] + [Shift] + [v] になります。
git remote add origin <GitHub からコピーした URL>
git remote　# 登録されているリモート一覧を表示
```

追加されたかを確認するには `git remote` で確認できます。成功していたら、  origin が出力されると思います。

## 3. ローカルの情報を push(送信)

ローカルにリモートリポジトリを登録できたら、ローカルのコミットの内容を GitHub に **push(送信)** しましょう。

push する前に、 GitHub のユーザー名を Git の設定に追加しておきましょう。この設定は各環境ごとに一度きりで大丈夫ですが、この教材の仕様上で画面を更新する度、入力することになります。追加するには以下のコマンドを入力してください。入力を間違えた場合はもう一度入力しなおして実行すれば大丈夫です。

```bash
# 大文字と小文字は正確に入力してください
# '<' と '>' は入力する必要はありませんので注意してください
git config --global user.username <GitHub でのユーザーネーム>
```

プロジェクトを push するときには、 Git の **ブランチ名** と **リモート先** を伝えてあげる必要があります。今回のケースでは、 **master** という名前のブランチを GitHub 上の **origin** という名前のリモート先に送信します。この場合、以下のコマンドを入力してください。

```bash
git push origin master # master ブランチを origin に push
# コマンド実行後、 GitHub のユーザー名とパスワードの入力が求められます
```

プッシュ後、GitHub 上の自分のリポジトリへアクセスして、過去にコミットした hello.txt が存在していたら成功です！
