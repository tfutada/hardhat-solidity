import { ethers } from "hardhat"
import {contractAddress} from "./const"

async function main() {
  try {
    // Get the ContractFactory of your SimpleContract
    const Lock = await ethers.getContractFactory("Lock")

    // バインド
    const contract = Lock.attach(contractAddress)

    // スマコンの呼び出し
    const ret = await contract.sayHello()

    console.log("done", ret)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
