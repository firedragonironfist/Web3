// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public uintVariable;
    bool public boolVariable;
    string public stringVariable;
    address public addressVariable;
    address payable public payableAddressVariable;

    function setAllVariables(uint256 _uintValue, bool _boolValue, string memory _stringValue, address _addressValue, address payable _payableAddressValue) public {
        uintVariable = _uintValue;
        boolVariable = _boolValue;
        stringVariable = _stringValue;
        addressVariable = _addressValue;
        payableAddressVariable = _payableAddressValue;
    }
}