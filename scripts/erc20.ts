import { ethers } from "hardhat"

async function main() {
  try {
    // コントラクト名を指定 (Hardhatでの便宜上の名前。ブロックチェーンとは関係ない。)
    const Lock = await ethers.getContractFactory("MyERC20")

    // コントラクトを設定
    const contract = Lock.attach("0x50bb46f3dD2b0f4382dF83802e71F109feEcf02e")

    // ウォレットアドレスを２つ取得。
    const [owner, otherAccount] = await ethers.getSigners()

    // 残高を照会する。
    const balanceOfOwner = await contract.balanceOf(owner.address)
    console.log("owner", balanceOfOwner)

    const balanceOfOther = await contract.balanceOf(otherAccount.address)
    console.log("otherAccount:", balanceOfOther)

    const ethValue: bigint = ethers.parseEther("2.5")

    // 送金する。owner -> otherAccount
    const transferTx = await contract.transfer(otherAccount, ethValue)
    await transferTx.wait()

    // ブロック番号を取得
    const latestBlock = await ethers.provider.getBlockNumber()
    const fromBlock = Math.max(0, latestBlock - 100) // Adjust this calculation as needed

    // イベント(Transfer)を検索する。
    const events = await contract.queryFilter("Transfer", fromBlock, "latest")

    // Process the events
    events.forEach((event) => {
      console.log(JSON.stringify(event, null, 4))
    })

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()

