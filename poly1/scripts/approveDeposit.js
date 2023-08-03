// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x0ab0468ED4764EAf7876e5288827106e486383F3"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xcC41179596B780Fe3746CA6008dfc33eC35Aaac5"; 
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    for(let i=0;i<5;i++)
     {const approveTx = await tokenContract.approve(fxERC721RootAddress, i);
    await approveTx.wait();
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();

    console.log('Approval confirmed');
    console.log("Tokens deposited");
     }


  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });