import { ethers } from "hardhat"
import { contractNameNFT } from "./const"


async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:", deployer.address)

  const token = await ethers.deployContract(contractNameNFT)

  console.log("Token address:", await token.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
