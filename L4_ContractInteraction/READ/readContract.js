/**
 * In this tutorial, 
 * we will learn how to call contract's getter functions
 * for this we called feeToSetter() on uniswapV2's Factory contract
 */

//dependecies
const {ethers, Wallet} = require("ethers");

//provider
const rpc = "https://mainnet.infura.io/v3/$API_KEY";
const provider = new ethers.JsonRpcProvider(rpc);

//contract (uniswap factory)
const contractAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const contractABI = [
"function feeToSetter() external view returns (address)"
];

const uniV2Factory = new ethers.Contract(contractAddress, contractABI, provider);
const contractCall = async() => {
    const result = await uniV2Factory.feeToSetter();
    console.log("fee_to_setter: ",result);
}

contractCall();
