import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import {accounts} from './utils/networks';

//pk localhost 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.6',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      accounts: accounts('localhost'),
    },
    localhost: {
      url: 'http://localhost:8545',
      accounts: accounts('localhost'),
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: accounts('mumbai'),//[String(process.env.PK_1)],//
      live: true,
      gas: 5100000,
      gasPrice: 8000000000
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com',
      accounts: accounts('matic'),
      live: true,
    },
    kovan: {
      url: process.env.KOVAN_INFURA_URL,
      accounts: accounts('kovan'),
      live: true
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 10,
    enabled: !!process.env.REPORT_GAS,
  },
  namedAccounts: {
    creator: 1,
    deployer:{
      1: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    }
  },
};

export default config;
