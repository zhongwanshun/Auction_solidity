const AuctionStore = artifacts.require("AuctionStore");
module.exports = function(deployer) {
    deployer.deploy(AuctionStore);
};