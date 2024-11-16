const {ethers} = require("ethers")

const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/$YOUR_API_KEY`);

const queryChain = async() => {
    //query block number
    const block = await provider.getBlockNumber();
    console.log("current block: ", block);

    //query account balance
    const balance = await provider.getBalance("0x_$address_9e");
    console.log("primary account eth balance:", balance);
    
    //formating techniques
    const readable_balance = ethers.formatEther(balance);
    const wei_balance = ethers.parseEther(readable_balance);
    //format logs
    console.log("=> : ", readable_balance, "ethers");
    console.log("Wei :: ", wei_balance);
}

queryChain();
