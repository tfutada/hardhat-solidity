import { ethers } from "hardhat"

async function main() {
  try {
    // デプロイ済みのコントラクトをバインド
    const Conn = await ethers.getContractFactory("AAReceive")
    const contract = Conn.attach("0x158723F32628dC27e44277c7C285BC0939D4F1D8")

    // アカウントを指定して、スマコンの呼び出し。
    const balance = await contract.getBalance()

    // convert wei to ether
    const b = ethers.formatEther(balance)
    console.log("balance", b)

    // withdraw
    const tx = await contract.withdraw()
    // console.log("tx", tx)
    const r = await tx.wait() // polling 問い合わせ
    // console.log("r", r)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
