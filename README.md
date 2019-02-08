# 日本語 Web フォントの最適化

<a href="https://fonts.google.com/" target="_blank">GoogleFonts</a> と同じやり方で、日本語フォントを 120 ファイルに分割して利用するサンプルです。

URL: <a href="https://jp-webfont-subset-example.herokuapp.com#" target="_blank">https://jp-webfont-subset-example.herokuapp.com#</a>


## しろくまフォントのダウンロード

サンプルフォントとして、<a href="https://www.lazypolarbear.com/entry/font-shirokuma" target="_blank">こちらのサイト</a> で公開している「しろくまフォント」を利用させていただいております。

予め `001Shirokuma-Regular.otf` をダウンロードし、プロジェクトのルートに保存してください。

## 環境

以下の環境で動作を確認しています。

- Windows 7
- Node 10.9.0
- Yarn 1.9.4
- Python 3.7.2

## モジュールのダウンロード

Node モジュールをインストールします。  

```bash
yarn
```

Python のモジュールをインストールします。

```bash
pip install fonttools brotli
```

## 1. フォントのサブセット化

`fonts` ディレクトリ配下に、120 分割されたフォントデータ (.woff2) と、`font-face` の定義ファイルが生成されます。

```bash
yarn subset
```

## 2. CSS のマージ

上記コマンドによって生成されたすべての CSS ファイルを、`css/fonts.css` にマージします。（マージされた CSS ファイルは削除されます。）

```bash
yarn merge
```

## 3. WorkBox のビルド

ブラウザにフォントファイルをプリキャッシュさせるための `/sw.js` をビルドします。

```bash
yarn build-wb
```

## 確認

「1. フォントのサブセット化」、「2. CSS のマージ」が完了したら、以下のコマンドを実行し、<a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a> を Chrome で開き、フォントセットを変更したり、テキストを入力してみてください。  

開発者ツールの Network タブでは、フォントデータが動的に読み込まれていることが確認できます。

```bash
yarn serve
```

