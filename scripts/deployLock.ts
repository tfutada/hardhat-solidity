import {ethers} from "hardhat";

async function main() {
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60; // 1分後に募金箱のロックを解除する。

    const lockedAmount: bigint = 10000000000000000n // 募金額 0.001ETH

    const lock = await ethers.deployContract("Lock", [unlockTime], {
        value: lockedAmount,
    });

    await lock.waitForDeployment();

    console.log(
        `Lock with ${ethers.formatEther(
            lockedAmount
        )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
