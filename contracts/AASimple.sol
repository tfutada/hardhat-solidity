// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract AASimple {
    uint private _value;

    constructor(){
        _value = 0;
    }

    function setValue(uint value) public {
        _value = value;
    }

    function getValue() public view returns (uint) {
        return _value;
    }

    function sayHello() public pure returns (string memory) {
        return "Hello World 888";
    }

    function getBlockNumberTimestamp() public view returns (uint, uint) {
        return (block.number, block.timestamp);
    }
}


