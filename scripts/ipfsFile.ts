import * as fs from "fs"
// Use the api keys by providing the strings directly
import pinataSDK, { PinataPinOptions } from "@pinata/sdk"

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY)

async function main() {
  const readableStreamForFile = fs.createReadStream("./images/gopher.png")

  const options: PinataPinOptions = {
    pinataMetadata: {
      name: "MyCustomName2",
      keyvalues: {
        customKey: "customValue2",
        customKey2: "customValue2-2"
      }
    },
    pinataOptions: {
      cidVersion: 0
    }
  }

  const res = await pinata.pinFileToIPFS(readableStreamForFile, options)
  console.log(res)
}

main()
