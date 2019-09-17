# 作業の取り消し

作業をしていて前回のコミットの状態まで戻したくなった場合、 `git checkout -- <ファイル名>` を実行することで簡単に編集を破棄できます。現在の作業状況を確認するには、 `git status` で変更されたファイルを表示したり、 `git diff` で前回のコミットとの差分を表示することでできます。

`git diff` の出力では、 **緑色** または **左側に +** が表示されているものは追加された変更、 **赤色** または **左側に -** が表示されているものは削除された変更を表しています。

## 問題

この問題は「ブランチによる分岐と統合」の問題の後に、 hello.txt に変更が加わっている状態から始まります。以下の Git コマンドを実行してみましょう。

```bash
# 作業を取り消す前に 'git diff' で前回のコミットとの差分を確認したり
# 'cat hello.txt' で現在のテキストの内容を確認してみましょう

git checkout -- hello.txt # hello.txt のコミット後の作業を取り消し
cat hello.txt # 取り消し後の hello.txt を確認
```

作業を取り消されたかを確認するには、対象ファイルを `cat` コマンドで確認したり、 `git status` コマンドで対象ファイルの有無を確認することでできます。