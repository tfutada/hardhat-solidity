// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Proxy {
    // 委譲先を保持する
    address internal currentImplementation;

    constructor(address _initialImplementation) {
        currentImplementation = _initialImplementation;
    }

    // 委譲先を変更する
    function upgrade(address _newImplementation) external {
        // Add authentication here to control who can upgrade the contract
        currentImplementation = _newImplementation;
    }

    // 委譲先にフォールバックする
    fallback() external payable {
        address implementation = currentImplementation;
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 {revert(0, returndatasize())}
            default {return (0, returndatasize())}
        }
    }
}
