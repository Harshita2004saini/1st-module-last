// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = "0x0ab0468ED4764EAf7876e5288827106e486383F3"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xcC41179596B780Fe3746CA6008dfc33eC35Aaac5"; // place your public address for your wallet here
const quantity=5;
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const setbase=await token.setBaseURI("ipfs://QmcHZUBY76S8LXAgU9Cnh1ECSSaEMNydHF3G5TCHa28ob8"); // set base uri 
    await setbase;


  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });