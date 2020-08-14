# ブランチによる分岐と統合

Git では `ブランチ(branch)` を使って隔離された作業環境を作ることができます。隔離して作業することで、メインの master ブランチを安全な状態に保ちつつ作業できます。作業が終わり、準備が整ったら `マージ(merge)` というブランチを統合する Git の機能を使えば、変更を master ブランチに反映できます。

![branch](/tutorial/img/git_branch.png)

## 問題: ブランチの作成と切替

前回の「変更内容の記録」から続いて、現在どのブランチにいるかを確認してみましょう。

```bash
# 'hello-git' ディレクトリ内から始まります
git status # 現在のブランチを確認
```

1 行目 に `On branch master` と表示され、 master ブランチにいることを示しています。

それでは、`git branch <ブランチ名>` で新しくブランチを作ってみましょう。今回は hello.txt を編集するので、 `edit-hello` と名前をつけてみましょう。新しく生成されるブランチは、現在いる master ブランチからの分岐となります。新しくブランチを作成したら、 `git branch` コマンドでブランチ一覧を表示して確認してみましょう。

```bash
git branch edit-hello # edit-hello ブランチの作成
git branch # ブランチ一覧の表示
```

新しく作成したブランチを確認できたら、 `git checkout <ブランチ名>` で対象のブランチに移動してみましょう。移動後に `git status` で、 edit-hello ブランチにいることが確認できたら成功です。

```bash
git checkout edit-hello # edit-hello ブランチに移動
git status
```

## 問題: edit-hello ブランチ上での作業とマージ

先ほど作成した edit-hello ブランチ上で、 hello.txt を編集してコミットしてみましょう。今回は簡単にコマンドで追記します。

```bash
echo "edit on edit-hello branch" >> hello.txt
# 'cat hello.txt' で hello.txt の中身を確認してみましょう
```

編集後、ステージングエリアに追加してコミットしましょう。

```bash
git add hello.txt
git commit -m "edit-hello ブランチでのコミット"
```

コミットできたら、 master ブランチに edit-hello での編集をマージ(統合)してみましょう。マージするには、マージ先のブランチに移動して `git merge <ブランチ名>` を実行することでマージできます。

```bash
git checkout master # master ブランチに移動
cat hello.txt # master ブランチでの hello.txt を確認

git merge edit-hello # master ブランチに edit-hello ブランチの内容をマージ
cat hello.txt # マージ後の hello.txt を確認
```

edit-hello ブランチで記録した内容が、 master ブランチ上に反映されてたらマージ成功です。
