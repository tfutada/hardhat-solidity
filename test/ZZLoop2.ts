const { expect } = require("chai")
import { ethers } from "hardhat"

describe("ZZLoop2", function() {
  it("Should loop", async function() {
    const smaconF = await ethers.getContractFactory("ZZLoop2")
    const contract = await smaconF.deploy()
    await contract.waitForDeployment()

    const resp = await contract.loop(30)
    console.log("Resp:", resp)

    const [deployer, other] = await ethers.getSigners()
    const resp2 = await contract.addExpense(30, "test", other.address)

    const idx = 3
    const ret = await contract.getExpense(idx)
    console.log(`Expense[${idx}]:`, ret)

  })
})


