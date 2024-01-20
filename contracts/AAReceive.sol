// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract AAReceive {
    receive() external payable {
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    // 募金を引き出す
    function withdraw() public {
        payable(msg.sender).transfer(address(this).balance);
//        payable(msg.sender).transfer(100 ether);
    }
    // 募金を指定したアドレスに引き出す
    function withdrawTo(address payable _to) public {
        _to.transfer(address(this).balance);
    }
}


