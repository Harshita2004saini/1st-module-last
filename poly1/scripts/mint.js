const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = "0x0ab0468ED4764EAf7876e5288827106e486383F3"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xcC41179596B780Fe3746CA6008dfc33eC35Aaac5"; // place your public address for your wallet here
const quantity=5;
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const tx=await token.mint(walletAddress, quantity);
    await tx.wait();


  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });