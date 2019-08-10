(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["branch"],{"0070":function(t,e,r){"use strict";var n=r("396a"),l=r.n(n);l.a},"278b":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"branch"},[r("h1",[t._v("ブランチによる分岐と統合")]),r("p",[t._v("Git では "),r("code",[t._v("ブランチ(branch)")]),t._v(" を使って隔離された作業環境を作ることができます。隔離して作業することで、メインの master ブランチを安全な状態に保ちつつ作業できます。作業が終わり、準備が整ったら "),r("code",[t._v("マージ(merge)")]),t._v(" というブランチを統合する Git の機能を使えば、変更を master ブランチに反映できます。")]),r("p",[t._v("(図を入れよう!)")]),r("h2",[t._v("問題 1")]),r("p",[t._v("まずは、現在どのブランチにいるかを確認してみましょう。")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("git status "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# 現在のブランチを確認")]),t._v("\n")])]),r("p",[t._v("1 行目 に "),r("code",[t._v("On branch master")]),t._v(" と表示され、 master ブランチにいることを示しています。")]),r("p",[t._v("それでは、新しくブランチを作ってみましょう。今回は hello.txt を編集するので、 "),r("code",[t._v("edit-hello")]),t._v(" と名前をつけてみましょう。新しく生成されるブランチは、現在いるブランチからの分岐となります。")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("git branch edit-hello "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# edit-hello ブランチの作成")]),t._v("\n")])]),r("p",[t._v("ブランチを作成したら、対象のブランチに移動してみましょう。移動後に "),r("code",[t._v("git status")]),t._v(" で、 edit-hello ブランチにいることが確認できたら成功です。")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("git checkout edit-hello "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# edit-hello ブランチに移動")]),t._v("\ngit status\n")])]),r("h2",[t._v("問題 2")]),r("p",[t._v("先ほど作成した edit-hello ブランチ上で、 hello.txt を編集してコミットしてみましょう。今回は簡単にコマンドで追記します。")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"This is edit-hello branch"')]),t._v(" >> hello.txt\n")])]),r("p",[t._v("編集後、ステージングエリアに追加してコミットしましょう。")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("cat hello.txt "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# hello.txt の中身を確認")]),t._v("\ngit add hello.txt\ngit commit -m "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"edit-hello ブランチでのコミット"')]),t._v("\n")])]),r("p",[t._v("コミットができたら、 master ブランチに戻ってマージしてみましょう。")]),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("git checkout master "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# master ブランチに移動")]),t._v("\ncat hello.txt "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# master ブランチでの hello.txt を確認")]),t._v("\ngit merge edit-hello "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# master ブランチに edit-hello ブランチの内容をマージ")]),t._v("\ncat hello.txt "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# マージ後の hello.txt を確認")]),t._v("\n")])]),r("p",[t._v("edit-hello ブランチで記録した内容が、 master ブランチ上に反映されてたらマージ成功です。")])])}];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return l})},"396a":function(t,e,r){},"4bc8":function(t,e,r){"use strict";var n=r("278b"),l=r("b340"),s=r("2877"),a=Object(s["a"])(l["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},"6f35":function(t,e){t.exports={source:"# ブランチによる分岐と統合\r\n\r\nGit では `ブランチ(branch)` を使って隔離された作業環境を作ることができます。隔離して作業することで、メインの master ブランチを安全な状態に保ちつつ作業できます。作業が終わり、準備が整ったら `マージ(merge)` というブランチを統合する Git の機能を使えば、変更を master ブランチに反映できます。\r\n\r\n(図を入れよう!)\r\n\r\n## 問題 1\r\n\r\nまずは、現在どのブランチにいるかを確認してみましょう。\r\n\r\n```bash\r\ngit status # 現在のブランチを確認\r\n```\r\n\r\n1 行目 に `On branch master` と表示され、 master ブランチにいることを示しています。\r\n\r\nそれでは、新しくブランチを作ってみましょう。今回は hello.txt を編集するので、 `edit-hello` と名前をつけてみましょう。新しく生成されるブランチは、現在いるブランチからの分岐となります。\r\n\r\n```bash\r\ngit branch edit-hello # edit-hello ブランチの作成\r\n```\r\n\r\nブランチを作成したら、対象のブランチに移動してみましょう。移動後に `git status` で、 edit-hello ブランチにいることが確認できたら成功です。\r\n\r\n```bash\r\ngit checkout edit-hello # edit-hello ブランチに移動\r\ngit status\r\n```\r\n\r\n## 問題 2\r\n\r\n先ほど作成した edit-hello ブランチ上で、 hello.txt を編集してコミットしてみましょう。今回は簡単にコマンドで追記します。\r\n\r\n```bash\r\necho &quot;This is edit-hello branch&quot; &gt;&gt; hello.txt\r\n```\r\n\r\n編集後、ステージングエリアに追加してコミットしましょう。\r\n\r\n```bash\r\ncat hello.txt # hello.txt の中身を確認\r\ngit add hello.txt\r\ngit commit -m &quot;edit-hello ブランチでのコミット&quot;\r\n```\r\n\r\nコミットができたら、 master ブランチに戻ってマージしてみましょう。\r\n\r\n```bash\r\ngit checkout master # master ブランチに移動\r\ncat hello.txt # master ブランチでの hello.txt を確認\r\ngit merge edit-hello # master ブランチに edit-hello ブランチの内容をマージ\r\ncat hello.txt # マージ後の hello.txt を確認\r\n```\r\n\r\nedit-hello ブランチで記録した内容が、 master ブランチ上に反映されてたらマージ成功です。\r\n"}},"7ad4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"terminal-box"}},[t._v("ターミナル予定地")])},l=[],s={},a=s,c=(r("0070"),r("2877")),o=Object(c["a"])(a,n,l,!1,null,null,null);e["a"]=o.exports},afa1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"git-text"}},[r("md",{staticClass:"markdown-body"}),r("TerminalBlock")],1)},l=[],s=r("4bc8"),a=r("7ad4"),c={components:{md:s["default"],TerminalBlock:a["a"]}},o=c,h=r("2877"),i=Object(h["a"])(o,n,l,!1,null,null,null);e["default"]=i.exports},b340:function(t,e,r){"use strict";var n=r("6f35"),l=r.n(n);e["default"]=l.a}}]);
//# sourceMappingURL=branch.82baede6.js.map