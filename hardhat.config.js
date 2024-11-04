require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
//0x1211AAB5072a5422A5aB89E699f75945C8C193f8

module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
            url: "https://sepolia.infura.io/v3/4716a140195c4cabb1418e2ac2f6573d", // Replace with your Infura project ID
            accounts: [`0x5e2c800ee0f4882a9f9add79b9426b9091dd5b91efc3a5f357bf7b03351b8edd`] // Replace with your wallet's private key
        }
    }
};
