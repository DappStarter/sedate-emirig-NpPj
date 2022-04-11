require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan razor remember comic harvest define army gauge'; 
let testAccounts = [
"0xa8d63b0a5ab56b6687898c784648b7e4040cf538cbd35d588bfa99591871704c",
"0x8c03624d507e62ceea7226a80813a38588e7f0538b0f0c6e34f87fe9e3047b83",
"0x73629fbd6ed8b40398f835e4b4e81044ae2da7643ad73cbcf4ce275e7e61fd27",
"0xf673863c13dda7d7feabaf8176378c69ca2c1c4781398ab984d19a7f2804a589",
"0x1ba42808699a648b7424a47dc775085ebe5f97dea845ef31add29628a7846105",
"0x7c4a59f2779ade5a8cc6120e0b5010409a4a6b7f0469bd3f6d87551d3c148751",
"0x6c21a3b16998acf289e6e5438fb730fae6ba239bec94beb86169b9f12857a28c",
"0x0f90fc3ba89ac5e1328b052a6ca5269905643284b06d108b1da5b5e0a0aa0c50",
"0xff5a79bd7fe1330b3315f02cf0cbf431e23769a86ffa0d8b4eb5751c681209b1",
"0x6dacc520a6f6829bb8064407cb4cb286ab7b0452383ce58819ad391ba8d0ce71"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

