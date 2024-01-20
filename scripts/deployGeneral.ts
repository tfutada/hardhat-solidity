import { ethers } from "hardhat"

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("デプロイする人のアカウント・アドレス:", deployer.address)

  const contract = await ethers.deployContract("AAReceive2")

  console.log("コントラクトアドレス:", await contract.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
