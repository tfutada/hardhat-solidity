import {
  time,
  loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("AAERC20.sol contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    const [owner] = await ethers.getSigners()

    const hardhatToken = await ethers.deployContract("MyToken")

    const ownerBalance = await hardhatToken.balanceOf(owner.address)
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
  })
})

describe("Token contract", function() {
  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2] = await ethers.getSigners()

    const hardhatToken = await ethers.deployContract("MyToken")

    // オーナーからアドレス１に50トークンを送る
    const tx = await hardhatToken.transfer(addr1.address, 50)
    await tx.wait()
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50)

    // アドレス１からアドレス２に50トークンを送る
    const tx2 = await hardhatToken.connect(addr1).transfer(addr2.address, 50)
    await tx2.wait()
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50)
  })
})
