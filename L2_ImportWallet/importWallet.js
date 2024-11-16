const {ethers, Wallet} = require("ethers");

//use wallet
const pkey = "INSERT_PRIVATE_KEY_HERE";
const wallet = new Wallet(pkey);

//console
console.log("wallet address: ", wallet.address);

// Or Even You can derive wallet address directly from mneumonics, https://docs.ethers.org/v5/api/signer/#Wallet

// Create a wallet instance from a mnemonic...
// mnemonic = "test test test test test arb test junk bloody gitdork prank F_OFF"
// walletMnemonic = Wallet.fromMnemonic(mnemonic)

