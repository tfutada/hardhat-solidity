import { ethers } from "hardhat"

async function main() {
  try {
    // デプロイ済みのコントラクトをバインド
    const Conn = await ethers.getContractFactory("AAReceive2")
    const contract = Conn.attach("0x147e3EfC403FB379a096EFc3f118766a033B97C9")

    // アカウントを指定して、スマコンの呼び出し。
    const balance = await contract.getBalance()

    // convert wei to ether
    const b = ethers.formatEther(balance)
    console.log("balance", b)

    // withdraw
    const tx = await contract.withdraw()
    console.log("tx", tx)

    console.log("done")
    await new Promise(resolve => { /* never resolves */
    })

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
