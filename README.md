# Fullstack Boilerplate V2
[STATUS] Partially Complete

This boilerplate is an improvement of my previous boilerplate that I utilised for Web3 projects - consists of my favourite frontend technologies along with industry standard tools for development, like Hardhat and Ethers.js.

`NOTE: To remove any packages, simply run "yarn remove <package_name"`

## Dependencies
- ReactJS(JavaScript) > frontend
- TailwindCSS > component styling
- DotEnv > mask key variables
- OpenZeppelin > industry standard utility lib for Solidity
- Moralis > blockchain & database interaction
- Ethers > blockchain interaction (prod/dev env)
- Hardhat > local dev env
- web3modal > modal for web3 wallet selection (UX) e.g. Metamask, TrustWallet etc
## Structure
Src/ contains three folders that I've included:

- 🗂 Components > hosts all the components that make up the dApp
- ⚖ Context > hosts state values for processing and distribution
- ⛓ Hooks > my custom Hooks that I find useful for dApp development (NOTE: will add more of the gradually)

## Suggestions
These are a few packages you can can also include yourself:
- AXIOS > for external API interaction (axios)
- IPFS HTTP Client > forIPFS interaction (ipfs-http-client@50.1.2/ipfs-http-client@latest)

[PS] This repo is subject to change to ensure that it allows for quick plug 'n' play, streamlining the development process.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```