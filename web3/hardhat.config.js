require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = "YOUR ADDRESS";
const RPC_URL = "https://rpc.cardona.zkevm-rpc.com";
module.exports = {
  defaultNetwork: "polygon_zkEVM",
  networks: {
    hardhat: {
      chainId: 2442,
    },
    polygon_zkEVM: {
      url: "https://rpc.cardona.zkevm-rpc.com",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
