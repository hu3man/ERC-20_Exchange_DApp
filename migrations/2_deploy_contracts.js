const EthSwap = artifacts.require("EthSwap");
const HuCoin = artifacts.require("HueCoin");

module.exports = function(deployer) {
    deployer.deploy(EthSwap);
    deployer.deploy(HueCoin);
};