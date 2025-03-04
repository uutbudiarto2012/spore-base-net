import { Web3 } from 'web3';
const Web3Client = new Web3();
// Web3Client.setProvider('https://rpc.ankr.com/gnosis')
Web3Client.setProvider('https://rpc.gnosis.gateway.fm')
export default Web3Client