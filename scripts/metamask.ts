import { ethers } from "ethers";

async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create a Web3 provider from MetaMask
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the signer from the provider
            const signer = provider.getSigner();

            return signer;
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log("MetaMask is not installed");
    }
}

async function main() {
    const signer = await connectToMetaMask();
    if (signer) {
        console.log("Connected to MetaMask");
        // You can now use the signer for transactions
    }
}

main();
