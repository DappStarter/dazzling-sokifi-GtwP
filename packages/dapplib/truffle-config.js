require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind hospital hidden enroll olympic gather'; 
let testAccounts = [
"0xae8789762cd587bd8233eef3e1182d7ac68b22f58c200a0644347bfd1db1c922",
"0x3629e01a997ccab769f657d4838779ab1f8e168a3e0f75d5f5455ebd1eed5620",
"0x5ea64ad8295eed00f1c8288967ebcb1048e2250407fba27c88a9e4a3b3b19300",
"0xcadd6fb7d9fe7d831b6d2a49a4c28f763d94cc0cb16ee8659f02f89b17019a6a",
"0x955f01a4b5eee378cc099fd64d4c44dd9017d547751350fc7b9c5abe2de25a04",
"0x7937e487a217b753ba02218bf2dfc8b60dd51a3c1a049c4deeb929817ae80513",
"0x251938d3e544715458d3ebf9180195dec7171146e81045ac22db31d861f6d463",
"0x638e3ebe7fe11ef26d25812231172c0e412dc9bcb8be932fcb249574498bf665",
"0xf214f440b48c643137bf8325dfa641cef808ac0ca926b5e79512cbfabcc36885",
"0xb27a2d68c15461833b549974abf7e2f6f89b1ccb51278f0055a01157e0751615"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


