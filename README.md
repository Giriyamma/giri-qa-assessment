Smart Contract Deployment with Hardhat

This repository contains scripts for deploying a smart contract using Hardhat. The deployment process includes deploying the contract, calling a setter function to set a value, and retrieving the value using a getter function.

Installation:

Prerequisites:
Before you begin, ensure you have the following installed:
Node.js (with npm)
Docker

Clone the Repository:
`git clone git@github.com:Giriyamma/giri-qa-assessment.git`
`cd Hardhat_SmartContract`

Install Dependencies
`npm install`

Usage:

Local Deployment:
To deploy the smart contract locally, run:
`sh deploy.sh`

This command will compile the contracts, deploy them to a local Hardhat node, call the setter function to set a value, and then call the getter function to retrieve the value.

Docker Deployment:
If you prefer to deploy using Docker, execute the following command:
`docker-compose up`

This will build and run the Docker container, which will execute the deployment script inside the container.

Output:
Upon successful deployment, the contract address, deployer address, value set, and retrieved value will be printed to the console. Additionally, this information will be saved to an output.json file.