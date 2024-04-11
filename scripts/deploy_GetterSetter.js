const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function deployContract() {
    // Read the contract artifact
    const contractArtifactPath = path.join(__dirname, "../artifacts/contracts/GetterSetter.sol/GetterSetter.json");
    const contractArtifact = fs.readFileSync(contractArtifactPath);
    const parsedArtifact = JSON.parse(contractArtifact);

    // Connect to the local Hardhat node
    const provider = new ethers.providers.JsonRpcProvider();

    // Get signer
    const signer = provider.getSigner();

    // Deploy the contract
    const Contract = new ethers.ContractFactory(
        parsedArtifact.abi,
        parsedArtifact.bytecode,
        signer
    );
    const contract = await Contract.deploy();

   // console.log("Contract deployed to address:", contract.address);
    fs.appendFileSync("output.log", `Contract address: ${contract.address}\n`);
    // Get deployer address
    const deployerAddress = await signer.getAddress();
    //console.log("Deployed by address:", deployerAddress);
    return { contract, deployerAddress };
}

async function callSetterFunction(contract) {
    // Call the setter function
    const newValue = ethers.utils.formatBytes32String("New Value");
    await contract.setBytes32(newValue);
    //console.log("Setter function called with value:", newValue);
    fs.appendFileSync("output.log", `Value set: ${newValue}\n`);
}

async function callGetterFunction(contract) {
    // Call the getter function
    const value = await contract.getBytes32();
    //console.log("Value retrieved from getter function:", value);
    fs.appendFileSync("output.log", `Value retrieved: ${value}\n`);
}

async function main() {
    try {
        const { contract, deployerAddress } = await deployContract();
        await callSetterFunction(contract);
        await callGetterFunction(contract);

        // Log deployer address to output.log
        fs.appendFileSync("output.log", `Deployer address: ${deployerAddress}\n`);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
