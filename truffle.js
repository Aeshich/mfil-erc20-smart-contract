// Dotenv javascript libraries needed
require('dotenv').config();
// Truffle HDWallet Provider javascript libraries needed
var HDWalletProvider = require("truffle-hdwallet-provider");
// Interact with the ethereum blockchain via infura.io
// The key for infura.io and mnemonic phrase are defined in .env
var ropstenProvider = new HDWalletProvider(process.env["MNEMONIC"], "https://ropsten.infura.io/" + process.env["INFURA_KEY"]);
var mainNetProvider = new HDWalletProvider(process.env["MNEMONIC"], "https://mainnet.infura.io/" + process.env["INFURA_KEY"]);
// I chose gas price and gas limit based on what ethereum wallet was recommending for a similar transaction. You may need to change the gas price!
// Use Gwei instead of Wei for the gas price unit
var gasPriceGwei = 60;
var gasLimit = 3000000;
// Truffle configuration for MFIL Ethereum Smart Contract
module.exports = {
    networks: {
        // Ganache
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        // Ropsten Test Net
        ropsten: {
            provider: ropstenProvider,
            gas: gasLimit,
            gasPrice: gasPriceGwei * 1e9,
            network_id: '1',
        },
        // Main Net
        mainnet: {
            provider: mainNetProvider,
            gas: gasLimit,
            gasPrice: gasPriceGwei * 1e9,
            network_id: '2',
        }
    }
};