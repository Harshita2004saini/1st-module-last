require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["0xcb0741d46a44cb9c8d3106bba46dde00117c82d239fae5e345d617cbf3bb2cac"],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ["0xcb0741d46a44cb9c8d3106bba46dde00117c82d239fae5e345d617cbf3bb2cac"],
    },
  },
  
  etherscan: {
    apiKey: {
      goerli: '8BPGUUKV5HN16SNAZ734648P91NRCQJ8VA'
    }
  }
};