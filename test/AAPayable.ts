const { expect } = require("chai")
import { ethers } from "hardhat"

describe("AAPayable", function() {
  it("Should transfer ETH to this contract", async function() {
    const smaconF = await ethers.getContractFactory("AAPayable")
    const contract = await smaconF.deploy()
    await contract.waitForDeployment()

    // call a smart contract function with ETH
    const ethValue: bigint = ethers.parseEther("0.001")
    const resp = await contract.fundEth(999, { value: ethValue })
    // console.log("Resp:", resp)
    const r = await resp.wait()
    // console.log("!!!  :", r)

    // check the balance of the smart contract
    const balance = await ethers.provider.getBalance(contract.getAddress())
    console.log("Balance:", balance.toString())
    expect(balance.toString()).to.equal(ethValue.toString())
  })
})
