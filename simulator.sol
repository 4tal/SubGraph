pragma solidity ^0.4.24;

contract thegraph {
    
    event CampaignCreated(uint256 relevantNumber, address owner, address moderator);
    event CampaignJoined(uint256 amount, address joinUser);
    
    struct Campaign {
        address _web3;
        address _moderator;
        address _owner;
        address _campaign;
    }
    
    struct Join {
        address _campaign;
        address _amount;
    }
    
    function createCampaign(uint relevantNumber, address _moderator, address _owner) public{
        emit CampaignCreated(relevantNumber, _moderator, _owner);
    }
    
    function joinCampaign(uint _amount, address _joinUser) public{
        emit CampaignJoined(_amount, _joinUser);
    }
}
