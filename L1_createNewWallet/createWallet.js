//dependencies
const {ethers, Wallet} = require("ethers");

//provider
const eth_rpc = "https://mainnet.infura.io/v3/$api_key";
const provider = new ethers.JsonRpcProvider(eth_rpc);

//wallet
const wallet = Wallet.createRandom(provider);
const privateKey = wallet.privateKey;

// logs
console.log(wallet); 
console.log(privateKey);

/*
//properties
const walletAddress = wallet.address
const walletProvider = wallet.provider
const walletPublicKey = wallet.publicKey

//logging properties 
console.log(walletAddress)
console.log(walletProvider)
console.log(walletPublicKey)
*/
