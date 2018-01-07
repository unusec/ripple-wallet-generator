/*	
	A simple cold storage wallet generator, using the official API made available by Ripple. 
	This code can be run offline
*/	
const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();
const wallet = api.generateAddress();
console.log(`Wallet address: ${wallet.address}
Wallet secret key: ${wallet.secret}`);