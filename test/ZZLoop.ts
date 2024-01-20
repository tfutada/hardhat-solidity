const { expect } = require("chai")
import { ethers } from "hardhat"

describe("ZZLoop", function() {
  it("Should loop", async function() {
    const smaconF = await ethers.getContractFactory("ZZLoop")
    const contract = await smaconF.deploy()
    await contract.waitForDeployment()

    const resp = await contract.loop(30)
    console.log("Resp:", resp)
  })
})


