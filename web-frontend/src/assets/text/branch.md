# ブランチによる分岐と統合

Git では `ブランチ(branch)` を使って隔離された作業環境を作ることができます。隔離して作業することで、メインの master ブランチを安全な状態に保ちつつ作業できます。作業が終わり、準備が整ったら `マージ(merge)` というブランチを統合する Git の機能を使えば、変更を master ブランチに反映できます。

(図を入れよう!)

## 問題 1

まずは、現在どのブランチにいるかを確認してみましょう。

```bash
git status # 現在のブランチを確認
```

1 行目 に `On branch master` と表示され、 master ブランチにいることを示しています。

それでは、新しくブランチを作ってみましょう。今回は hello.txt を編集するので、 `edit-hello` と名前をつけてみましょう。新しく生成されるブランチは、現在いるブランチからの分岐となります。

```bash
git branch edit-hello # edit-hello ブランチの作成
```

ブランチを作成したら、対象のブランチに移動してみましょう。移動後に `git status` で、 edit-hello ブランチにいることが確認できたら成功です。

```bash
git checkout edit-hello # edit-hello ブランチに移動
git status
```

## 問題 2

先ほど作成した edit-hello ブランチ上で、 hello.txt を編集してコミットしてみましょう。今回は簡単にコマンドで追記します。

```bash
echo "This is edit-hello branch" >> hello.txt
```

編集後、ステージングエリアに追加してコミットしましょう。

```bash
cat hello.txt # hello.txt の中身を確認
git add hello.txt
git commit -m "edit-hello ブランチでのコミット"
```

コミットができたら、 master ブランチに戻ってマージしてみましょう。

```bash
git checkout master # master ブランチに移動
cat hello.txt # master ブランチでの hello.txt を確認
git merge edit-hello # master ブランチに edit-hello ブランチの内容をマージ
cat hello.txt # マージ後の hello.txt を確認
```

edit-hello ブランチで記録した内容が、 master ブランチ上に反映されてたらマージ成功です。
