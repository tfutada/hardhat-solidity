const { expect } = require("chai")
import { ethers } from "hardhat"

describe("AASimple", function() {

  it.skip("Should return the new value once it's changed", async function() {
    // コントラクトのファクトリーを取得
    const AASimple = await ethers.getContractFactory("AASimple")
    // デプロイする
    const aaSimple = await AASimple.deploy()
    // デプロイ完了まで待つ
    await aaSimple.waitForDeployment()

    // デプロイしたコントラクトのgetValueを呼び出す
    await aaSimple.setValue(5)
    // デプロイしたコントラクトのgetValueを呼び出す
    expect(await aaSimple.getValue()).to.equal(5)

    await aaSimple.setValue(10)
    expect(await aaSimple.getValue()).to.equal(10)

    // helloを呼び出す
    const hello = await aaSimple.sayHello()
    console.log("hello:", hello)
  })

  it("Should return block number ant timestamp", async function() {
    // コントラクトのファクトリーを取得
    const AASimple = await ethers.getContractFactory("AASimple")
    // デプロイする
    const aaSimple = await AASimple.deploy()
    // デプロイ完了まで待つ
    await aaSimple.waitForDeployment()

    // ブロック番号とタイムスタンプを取得する
    const blockNumber = await aaSimple.getBlockNumberTimestamp()
    console.log("blockNumber:", blockNumber)
    // convert unix timestamp to Date
    const date = new Date(Number(blockNumber[1]) * 1000);
    console.log("date:", date)
  })
})
