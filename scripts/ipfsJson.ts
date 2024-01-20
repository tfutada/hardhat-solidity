import * as fs from "fs"
// Use the api keys by providing the strings directly
import pinataSDK from "@pinata/sdk"

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY)

async function main() {

  const options = {
    pinataContent: {
      name: "Gopher",
      description: "My NFT Gopher by ChatGPT",
      external_url: `https://pinata.cloud`,
      image: `ipfs://QmR84xV7RvdvXxcb1JAkkn6dS3aJjbsKWA7TZqzpqCKYBr`
    },
    pinataMetadata: {
      name: "Gopher"
    }
  }

  const res = await pinata.pinJSONToIPFS(options)
  console.log(res)
}

main()
