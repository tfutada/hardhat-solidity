import { ethers } from "hardhat"
import { contractAddressERC20, contractAddressNFT, contractNameNFT, metamaskAddr2, metamaskAddr3 } from "./const"

async function main() {
  try {
    // Get the ContractFactory of your SimpleContract
    const MyNFT = await ethers.getContractFactory(contractNameNFT)

    // スマートコントラクトを設定
    const contract = await MyNFT.attach("0x5C7a62F81151Df284cAFa7FCa5DC598e80C5fFf8")

    // アカウントを指定して、スマコンの呼び出し。
    const ipfsHash = "QmbcD3LbxwgKE4qXrqkG5xPWAvXbJRStAU5yBm5n4evQC1"
    const tx = await contract.awardItem(metamaskAddr3, `https://gateway.pinata.cloud/ipfs/${ipfsHash}`)
    const ret = await tx.wait()
    console.log("done:", ret)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
