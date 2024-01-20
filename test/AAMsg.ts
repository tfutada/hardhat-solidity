const { expect } = require("chai")
import { ethers } from "hardhat"

describe("AAMsg", function() {
  it("Should set owner to caller", async function() {
    const smaconF = await ethers.getContractFactory("AAMsg")
    const contract = await smaconF.deploy()
    await contract.waitForDeployment()

    // Retrieve the owner of the contract
    var owner = await contract.owner()
    console.log("Owner:", owner)

    // Expect the owner to be equal to the address that deployed the contract
    const [deployer, other] = await ethers.getSigners()
    expect(owner).to.equal(deployer.address)

    // call changeOwner
    await contract.changeOwner(other.address)
    owner = await contract.owner()
    expect(owner).to.equal(other.address)

    // オーナーを元に戻す。
    await contract.connect(other).changeOwner(deployer.address)
  })
})
