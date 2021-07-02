import { ethers } from "ethers";

export const provider = new ethers.providers.JsonRpcProvider(
  "http://erigon.dappnode:8545",
  "mainnet"
);
