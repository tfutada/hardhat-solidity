// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract ZZLoop {

    function loop(uint limit) pure public returns (uint) {
        for (uint i = 0; i < limit; i++) {
            console.log("i is %o", i);
        }
        return limit;
    }
}


