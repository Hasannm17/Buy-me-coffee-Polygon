// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract chai {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }
    Memo[] public memos;
    address payable owner; //That means owner will recieve funds

    constructor() {
        owner = payable(msg.sender);
    }

    function buyCai(string calldata name, string calldata message)
        external
        payable
    {
        require(msg.value > 0, "Please pay more than 0");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
