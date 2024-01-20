// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract ZZLoop2 {

    struct Expense {
        uint amount;
        string description;
        address payable recipient;
    }

    Expense[] public expenses;

    constructor() {
        expenses.push(Expense(100, "Coffee", payable(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4)));
        expenses.push(Expense(200, "Donuts", payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2)));
        expenses.push(Expense(300, "Beer", payable(0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db)));
    }

    function getExpenseCount() public view returns (uint) {
        return expenses.length;
    }

    function addExpense(uint amount, string memory description, address payable recipient) public {
        expenses.push(Expense(amount, description, recipient));
    }

    modifier indexInBounds(uint index) {
        require(index < expenses.length, "Index must be in range");
        _;
    }

    function getExpense(uint index) public view indexInBounds(index) returns (uint, string memory, address)  {
        Expense memory expense = expenses[index];
        return (expense.amount, expense.description, expense.recipient);
    }

    function loop(uint limit) public pure returns (uint) {
        for (uint i = 0; i < limit; i++) {
            console.log("i is %o", i);
        }
        return limit;
    }
}


