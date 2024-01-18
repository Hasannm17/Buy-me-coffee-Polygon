// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  const Chai = await hre.ethers.getContractFactory("chai");
  const chai = await Chai.deploy(); 
  await  chai.waitForDeployment()

  console.log("Deployed Contract Address: "  , `${await chai.getAddress()}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x1E146ef1Fbf014e6814BA6f1f77cac583f151916

//mainnet
//0xedf815F7517C093bAfC48fb8dC161859Af011c5E