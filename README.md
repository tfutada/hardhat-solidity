# Hardhatプロジェクト for Solidity チュートリアル

Hardhatを使用したSolidityのチュートリアルのソースコード一式です。

## 必要条件

- Node.js (v18.17.0）で動作確認。WindowsのNode.jsのバージョンによっては動かないことがよくあります！
- Hardhat v2.19

## インストール

インストールします。

```shell
npm install
```

ローカルEVMを起動します。

```shell
npx hardhat node
```

(別窓で)スマート・コントラクトをコンパイルします。

```shell
npx hardhat compile
```

スマート・コントラクトを単体テストします。

```shell
npx hardhat test test/AASimple.ts
```

環境変数にウォレット(Metamask)のプライベートキーをセットします。
ファイルに直接ハードコードしないでください！！！

```shell
export METAMASK_PRIVATE_KEY_DEV_A1=f58...
export METAMASK_PRIVATE_KEY_ACCOUNT3=072...
```

スマート・コントラクトをPolygonのmumbaiテストネットにデプロイします。

```shell
npx hardhat run scripts/deployGeneral.ts --network mumbai
```

スマート・コントラクトをVerifyします。デプロイしたスマコンのアドレスに置き換えてください。

```shell
npx hardhat verify --network mumbai 0x50b...
```

TSクライアントを実行し、スマート・コントラクトを叩きます。

```shell
npx hardhat run scripts/simple.ts --network mumbai
```

その他のスマート・コントラクトも同様の手順で実行します。

## ファイル構成

- contracts スマートコントラクトのSolidityプログラム
- scripts デプロイ用のTSスクリプトとクライアントのTSスクリプト
- test 単体テストのTSスクリプト
- public dAppsのHTMLとJSコード
