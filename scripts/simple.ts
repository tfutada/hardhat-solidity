import { ethers } from "hardhat"

async function main() {
  try {
    // デプロイ済みのコントラクトをバインド
    const Conn = await ethers.getContractFactory("AASimple")
    const contract = Conn.attach("0x95d64c13C1b7Af2ac9Bbfbb6b329bAacA24262b0")

    // アカウントを指定して、スマコンの呼び出し。
    const ret = await contract.getBlockNumberTimestamp()
    console.log("done", ret)
    const date = new Date(Number(ret[1]) * 1000);
    console.log("date:", date)

    const hello = await contract.sayHello()
    console.log("hello:", hello)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
