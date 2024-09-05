# Wallet_api

This is a Token stacking Dapp. The smart contract for the project is written in the `Solidity` language. The backend is written in `JavaScript` and `HTML`, `CSS`, and `Bootstrap` is used to develop the frontend part. 

## SETUP

1. Clone the repository:

   ```bash
   git clone https://github.com/krishansinghal/Token_staking_dapp
   ```

2. Navigate to the project directory:

   ```bash
   cd Token_staking_dapp
   ```
   go to the folder web3.

   ```bash
   cd web3
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### OPTIONAL
4. Setup Hardhat.config file:
- The hardhat file is configured to deploy the project on `polygon zkEVM` network, Change the network credentials in `hardhat.config.js` file according to your requirement.
- Set the your Wallet address in the `hardhat.config.js` file.

5. Contract Deployment:
Follow the command to deploy the contract:
- To run the hardhat node:
    ```bash
    npx hardhat node
    ```
-Change the network name according to your requirement:
  ```bash
  npx hardhat run --network <network_name> script/deploy.js
  ```    

6. Setting up contract address and ABI
- After the successful deployment you'll get contract address. Copy the address and paste it in the `header.js` file.
- Copy the Abi of `stakingtoken.sol` and `theblockchaincoders.sol` contracts and paste it in the `header.js` file.



   run the index.html file,It should be run on `http://localhost:5500`.



