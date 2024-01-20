import { ethers } from "hardhat"

async function main() {
  try {
    // spread of list
    const list = [1, 2, 3, 4, 5]
    const [first, second, ...rest] = list
    console.log("first:", first)
    console.log("second:", second)
    console.log("rest:", rest)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
