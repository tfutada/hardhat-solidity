// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract AAPayable {

    function fundEth(uint abc) public payable {
        require(msg.value >= 0.001 ether, "Not enough Ether provided.");

        console.log("msg.value is %o", msg.value);
        console.log("abc is %o", abc);
    }
}

