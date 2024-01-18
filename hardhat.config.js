require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const POLYGON_URL = process.env.privateKey;
const PRIVATE_KEY = process.env.PV;

module.exports = {
  solidity: "0.8.19",
  networks: {
    polygon: {
      url: POLYGON_URL,
      accounts:[PRIVATE_KEY]
    },
  },
};
