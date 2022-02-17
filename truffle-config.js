const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 5777,
      network_id: "*", // Match any network id
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          "e76d08c0de53d06672334f703c98c0b340939ed5ce1388cd0a5635cac4598744",
          "https://ropsten.infura.io/v3/d3099dcc710c4909bd4882e850fdf962"
        );
      },
      network_id: 3,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
      gasPrice: 470000000000,
      from: "0xfdBBf999650309784D6275C4402F17dc0177414D",
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  compilers: {
    solc: {
      version: "0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
