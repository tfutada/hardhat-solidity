import { ethers } from "hardhat"
import { metamaskAddr3 } from "./const"

async function main() {
  try {
    const [signer1, signer2] = await ethers.getSigners()

    // 指定のアドレスに、0.001ETH 送金する。
    const tx = await signer2.sendTransaction({
      to: signer1,
      value: ethers.parseEther("0.001") // unit ETH
    })

    console.log("done", tx)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
