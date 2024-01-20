import {HardhatUserConfig, task} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import { boolean } from "hardhat/internal/core/params/argumentTypes"

const accounts = async (args: string, hre: HardhatRuntimeEnvironment) => {
    const accounts = await hre.ethers.getSigners();
    const provider = hre.ethers.provider;

    for (const account of accounts) {
        console.log(account.address);
        const balance = hre.ethers.formatEther(
            // getBalance returns wei amount, format to ETH amount
            await provider.getBalance(account.address)
        )
        console.log("balance:", balance);
    }
};
task("accounts", "Show the list of accounts", accounts);

const config: HardhatUserConfig = {
    defaultNetwork: "localhost",
    solidity: "0.8.23",
    networks: {
        hardhat: {
            accounts: {
                mnemonic: "gospel afford enlist dragon journey dog nation kangaroo crane brief inner execute",
                count: 3
            }
        },
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.METAMASK_PRIVATE_KEY_DEV_A1, process.env.METAMASK_PRIVATE_KEY_ACCOUNT3].filter(Boolean)
        },

    },
    etherscan: {
        apiKey: {
            polygonMumbai: process.env.POLYSCAN_KEY
        }
    }
};

export default config;
