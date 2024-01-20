async function connectToMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!")
    await window.ethereum.request({ method: "eth_requestAccounts" })
    document.getElementById("connect").innerHTML = "Connected"

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    console.log("Signer: ", signer)
    console.log("Provider: ", provider)

    const blockNumber = await provider.getBlockNumber()
    console.log("Block number: ", blockNumber)

    const balance = await provider.getBalance(lockAddress)
    console.log("Balance: ", balance)

    const signed = await signer.signMessage("Hello!")
    console.log("Signed: ", signed)

  } else {
    console.log("MetaMask is not installed!")
  }
}

async function withDraw() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!")
    await window.ethereum.request({ method: "eth_requestAccounts" })
    document.getElementById("connect").innerHTML = "Connected"

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // デプロイ済みのコントラクトの取得
    const lockContract = new ethers.Contract(lockAddress, lockAbi, provider)
    const ret = await lockContract.sayHello()
    console.log("Say Hello: ", ret)

    // 署名付きトランザクション
    const signer = provider.getSigner()
    const lockWithSigner = lockContract.connect(signer)

    try {
      // トランザクションの送信
      const tx = await lockWithSigner.withdraw()
      console.log("Withdraw done", tx)

      // イベント・リスナー for Transaction Receipt
      provider.once(tx.hash, (receipt) => {
        console.log("Receipt: ", receipt)
      })

      // イベント・リスナー for Withdrawal
      lockContract.on("Withdrawal", async (amount, when) => {
        console.log(`Withdrawal event detected! Amount: ${amount}, When: ${when}`)
        const balance = await provider.getBalance(lockAddress)
        console.log("Balance: ", balance)
      })

    } catch (err) {
      console.log("Error: ", err)
    }

  } else {
    console.log("MetaMask is not installed!")
  }
}

