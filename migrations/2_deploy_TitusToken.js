const TitusToken = artifacts.require("TitusToken");

module.exports = function (deployer) {
    deployer.deploy(TitusToken);
};