const { getWeth } = require("../scripts/getWeth")
const { getNamedAccounts } = require("hardhat")

async function main() {
    // the protocal treats everything as an ERC20 token
    await getWeth()
    const { deployer } = await getNamedAccounts()
}

async function getLendingPoor() {}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })