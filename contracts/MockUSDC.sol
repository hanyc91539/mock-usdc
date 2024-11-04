// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./ERC20.sol";

contract MockUSDC is ERC20 {
    address private owner;
    error notOwner();
    modifier onlyOwner() {
        if(msg.sender != owner) revert notOwner();
        _;
    }
    constructor(uint256 initialSupply) ERC20("Mock USDC", "USDC") {
        owner = msg.sender;
        _mint(owner, initialSupply);
    }
    function mint(address user, uint256 amount) onlyOwner external {
        _mint(user, amount);
    }
    function burn(uint256 amount) onlyOwner external {
        _burn(msg.sender, amount);
    }
}

/*
contract MockUSDC is ERC20 {
    constructor() ERC20("Mock USDC", "USDC"){
        _mint(msg.sender, 1000000000000000000000000000000);
    }
}
*/
