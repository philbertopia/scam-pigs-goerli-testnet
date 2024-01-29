import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ScamPigsTest',
  tokenName: 'Scam Pigs Test',
  tokenSymbol: 'SPT',
  hiddenMetadataUri: 'ipfs://QmUC28SBhammV14jSytUHqFh1r8iSdY6axyrWg8F6ASrYE/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x1C184E0C2Ff738E85eFc234b34A46C6c3E9C2F04",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
