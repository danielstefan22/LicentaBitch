require('@nomiclabs/hardhat-waffle');
//https://eth-goerli.g.alchemy.com/v2/XBtHHoll_ljkCkaq4HmXsbss6h8Fjzan
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
//const ALCHEMY_API_KEY = "XBtHHoll_ljkCkaq4HmXsbss6h8Fjzan";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
//const GOERLI_PRIVATE_KEY = "75a78ebf36adbd5dc109eb7bccfc2bec1043089f18c11512107161826e3721ce";
//${ALCHEMY_API_KEY}
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/XBtHHoll_ljkCkaq4HmXsbss6h8Fjzan`,
      accounts: [ '75a78ebf36adbd5dc109eb7bccfc2bec1043089f18c11512107161826e3721ce' ]
    }
  }
};
