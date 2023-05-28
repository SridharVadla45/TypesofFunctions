# MyToken
MyToken is an ERC20 token contract deployed on the Ethereum blockchain. It is based on the OpenZeppelin library and allows for the creation, transfer, and destruction of tokens.

# Features
ERC20 Standard: MyToken follows the ERC20 standard, enabling compatibility with various decentralized applications (DApps), wallets, and exchanges.
Token Name and Symbol: The token is named "Solana" with the symbol "SOL".
Initial Supply: Upon deployment, the contract mints and allocates an initial supply of 1,000,000 SOL tokens to the contract owner's address.
Minting Functionality: Only the contract owner can call the mint function to create new tokens and allocate them to a specified address
# Prerequisites
Solidity ^0.8.0
OpenZeppelin Contracts v4.0.0 or later
## Clone the repository:
[git clone https://github.com/your-username/your-repo.git
](url)

## Install the required dependencies using npm:
[npm install
](url)
## Compile the contract:
[npx hardhat compile
](url)
# Usage
Deploy the contract on the Ethereum blockchain by calling the constructor function MyToken(). This will create the token and allocate the initial supply to the contract owner's address.

The contract owner can call the mint function to create new tokens and allocate them to a specified address. This function can only be called by the contract owner.

Users can transfer tokens by calling the transfer function, providing the recipient's address and the amount of tokens to be transferred.

Users can burn their own tokens by calling the burn function, providing the amount of tokens to be destroyed. This function can be called by any token holder.
# License
This project is licensed under the MIT License.

# Disclaimer
Please note that this code is for educational and informational purposes only. It is not intended as financial or investment advice. Use it at your own risk.

