# 事前準備

## Mac OS X

* Xcode
* node.js （nodebrewでLTS版を導入する）
	* [nodebrew導入手順](https://github.com/hokaccha/nodebrew)
	* [node最新バージョンの確認](https://nodejs.org/en/)
		* 動作確認時の最新版は v4.5.0

## Windows

Windows環境ではビルドできません。現在確認中。


# 準備

```bash
git clone https://github.com/weathernews/wxbeacon.git
cd wxbeacon/wxbeacon-electron
npm install
```

# 書き換えと確認

1. ```npm test``` でElectronを立ち上げる
1. ```view.html```を書き換える
1. Electron上で⌘Rキー（Windowsの場合はCtrl+R）を押し再読込する

# 実行ファイル作成

```bash
npm start
```

でバイナリの作成と、作成されたバイナリの実行が行われる。
