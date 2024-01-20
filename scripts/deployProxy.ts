import { ethers } from "hardhat"

const CONTRACT_NAME = "Proxy"
const IMPL_CONTACT_ADDRESS = "0xfe72DC8FcAF379dBdB633634F4DF487b471CeFE0"
async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:", deployer.address)

  const contract = await ethers.deployContract(CONTRACT_NAME, [IMPL_CONTACT_ADDRESS])

  console.log("Contract address:", await contract.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
