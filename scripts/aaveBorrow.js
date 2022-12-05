async function main() {
    // the protocal treats everything as an ERC20 token
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })