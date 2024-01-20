import {ethers} from "hardhat";
import {contractAddress} from "./const"

async function main() {
    try {
        // Get the ContractFactory of your SimpleContract
        const Lock = await ethers.getContractFactory("Lock");
        // バインド
        const contract = Lock.attach(contractAddress);

        // スマコンの呼び出し
        // await contract.withdraw();

        // 他のアカウントからスマコンの呼び出し。ローカルの hardhat node のアカウントリストから取得。
        // const [owner, otherAccount] = await ethers.getSigners();

        const privateKey = process.env.METAMASK_PRIVATE_KEY_DEV_A1!;
        const wallet = new ethers.Wallet(privateKey); // 他のアカウントの秘密鍵を使用する
        const signer = wallet.connect(ethers.provider);

        // 他のアカウントからスマコンの呼び出し
        const a = await contract.connect(signer).withdraw();

        console.log("done");

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main();
