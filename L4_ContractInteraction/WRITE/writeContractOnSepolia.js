/**
 * In this tutorial, 
 * we will learn how to call contract's write functions
 * for this we will call set() function on a contract deployed on sepolia
 * `0xEB953c5a3E16c74E5Dc3d613E862497760aE9c73`
 */

//dependecies
const {ethers, Wallet} = require("ethers");


//provider
const rpc = "https://sepolia.infura.io/v3/$API_KEY";
const provider = new ethers.JsonRpcProvider(rpc);

// //wallet
const key = "$private_key";
const wallet = new Wallet(key);

const connectedWallet = wallet.connect(provider); //wallet becomes signer, and can execute write operations now

// settingup onchain contract object with contract address , contract's ABI along with the signer object
const contractAddress = "0xEB953c5a3E16c74E5Dc3d613E862497760aE9c73";
const contractABI = [
    "function num() view returns(uint)",
    "function set(uint _n) returns(uint)"
];
const contractOnSepolia =  new ethers.Contract(contractAddress, contractABI, connectedWallet); // note only with `connectedWallet` object instead of `provider` we can execute write operations.

//read
const callGetter = async() => {
    const get = await contractOnSepolia.num();
    console.log(get);
}

callGetter();

// write : calling write function "set(uint)"
const callSetterWithGetters = async() => {
    const before = await contractOnSepolia.num();
    
    await contractOnSepolia.set(43);

    const after = await contractOnSepolia.num();

    console.log("before: ", before);
    console.log("after: ", after);
}

callSetterWithGetters();

//@audit-issue ::: unexpected behaviour in async function
/**
 * The code works correctly and updates num() as expected but the async function
 * does not return uptodate values for getter calles
 
```
@deeydos ➜ /workspaces/Ethers_JS (main) $ node writeContract.js
33n    ----> //callGetter

-------> //callSetterWithGetters()
before:  33n 
after:  33n //@audit here it should have returned 43 as the number changed
```

 */
