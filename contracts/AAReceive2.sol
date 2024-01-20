// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract AAReceive2 {
    // Define a custom event that logs the address withdrawing and the amount
    event Withdrawal(address indexed withdrawer, uint amount);

    receive() external payable {
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Withdraw to the caller
    function withdraw() public {
        uint balance = address(this).balance;
        payable(msg.sender).transfer(balance);

        // Emit the custom event after the withdrawal
        emit Withdrawal(msg.sender, balance);
    }

    // Withdraw to the specified address
    function withdrawTo(address payable _to) public {
        uint balance = address(this).balance;
        _to.transfer(balance);

        // Emit the custom event after the withdrawal
        emit Withdrawal(_to, balance);
    }
}
