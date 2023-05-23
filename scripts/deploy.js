const hre = require("hardhat");

async function main() {
  // Get the Points smart contract
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  // Deploy it
  const myToken = await MyToken.deploy();
  await myToken.deployed();

  // Display the contract address
  console.log(` token deployed to ${myToken.address}`);
}

// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
