import { ethers } from "hardhat"
import { AAReceive__factory } from "../typechain-types"

async function main() {
  try {
    // デプロイ済みのコントラクトをバインド
    const Conn = await ethers.getContractFactory("AAReceive2")
    const contract = Conn.attach("0x3227A856a05Ff7c57a8F52B422216cB72cAaD646")

    // アカウントを指定して、スマコンの呼び出し。
    const balance = await contract.getBalance()

    // convert wei to ether
    const b = ethers.formatEther(balance)
    console.log("balance", b)

    // withdraw
    const tx = await contract.withdraw()
    console.log("tx", tx)

    // ブザーで知らせてもらう。
    contract.on("Withdrawal", (withdrawer, amount) => {
      console.log("!!! ラーメンできたよ！")
      console.log("withdrawer", withdrawer)
      console.log("amount", amount)
    })

    console.log("done")
    await new Promise(resolve => { /* never resolves */ });

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
