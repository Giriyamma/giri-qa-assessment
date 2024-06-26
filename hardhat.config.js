require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
//const { vars } = require("hardhat/config");
//const INFURA_API_KEY = vars.get("INFURA_API_KEY");
//const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    //sepolia: {
      //url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      //accounts: [SEPOLIA_PRIVATE_KEY],
    //},
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};


