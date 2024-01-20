const { expect } = require("chai")
import { ethers } from "hardhat"

async function waitForBlocks(ethersProvider, numberOfBlocks) {
  const startingBlock = await ethersProvider.getBlockNumber();
  while (true) {
    const currentBlock = await ethersProvider.getBlockNumber();
    if (currentBlock >= startingBlock + numberOfBlocks) {
      break;
    }
    // Wait for a short interval before checking again to avoid spamming the node
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

describe("AASimple2", function() {

  it("Should return the new value once it's changed", async function() {
    // コントラクトのファクトリーを取得
    const AASimple = await ethers.getContractFactory("AASimple")
    // デプロイする
    const aaSimple = await AASimple.deploy()
    // デプロイ完了まで待つ
    await aaSimple.waitForDeployment()

    var blockNumber = await ethers.provider.getBlockNumber()
    console.log("blockNumber:", blockNumber)

    // デプロイしたコントラクトのgetValueを呼び出す
    await aaSimple.setValue(5)

    await waitForBlocks(ethers.provider, 3)

    // check the block number
    blockNumber = await ethers.provider.getBlockNumber()
    console.log("blockNumber:", blockNumber)

  })
})

