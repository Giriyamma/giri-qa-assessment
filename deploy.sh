#!/bin/bash

# Remove the existing output files if it exists
rm -f output.*
rm -f scripts/output.log

# Compile contracts
npx hardhat compile

# Deploy contract, call setter function, and call getter function
npx hardhat run scripts/deploy_GetterSetter.js --network hardhat

# Extract contract address, deployer address, and value set from output.log
CONTRACT_ADDRESS=$(awk -F ': ' '/Contract address/ {print $2}' output.log)
DEPLOYER_ADDRESS=$(awk -F ': ' '/Deployer address/ {print $2}' output.log)
SETTER_VALUE=$(awk -F ': ' '/Value set/ {print $2}' output.log)
GETTER_VALUE=$(awk -F ': ' '/Value retrieved/ {print $2}' output.log)

# Write data to output.json
OUTPUT_JSON="{\"contract_address\": \"$CONTRACT_ADDRESS\", \"deployer_address\": \"$DEPLOYER_ADDRESS\", \"setter_value\": \"$SETTER_VALUE\", \"getter_value\": \"$GETTER_VALUE\" }"
echo $OUTPUT_JSON > output.json

# Print output to console
cat output.json
