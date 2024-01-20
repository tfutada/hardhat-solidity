// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFTStore is ERC721URIStorage {
    uint256 private _nextTokenId;
    uint256 public constant MAX_SUPPLY = 3;  // Maximum supply of tokens

    constructor() ERC721("MyNFTStore", "MYNFT") {}

    function awardItem(address player, string memory tokenURI)
    public
    returns (uint256)
    {
        require(_nextTokenId < MAX_SUPPLY, "Maximum supply reached");
        uint256 tokenId = _nextTokenId++;
        _mint(player, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}
