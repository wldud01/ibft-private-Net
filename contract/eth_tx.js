const path = require('path');
const fs = require('fs-extra');
const Web3 = require('web3');

// member1 details
const { tessera, besu, accounts } = require("./keys.js");
const host = besu.member1.url;

async function main(){
  const web3 = new Web3(host); // Node1
  //pre seeded account - test account only
  const privateKeyA = accounts['0x0a39bf163c349663708bedc4b0c4bc79c3e439d9'].privateKey;  //Node2
  const accountA = web3.eth.accounts.privateKeyToAccount(privateKeyA); // 특정 계정의 
  var accountABalance = web3.utils.fromWei(await web3.eth.getBalance(accountA.address));
  console.log("Account A has balance of: " + accountABalance);

  // create a new account to use to transfer eth to
  var privateKeyB  = accounts['0xe5677c0695c1e155de69b4a2a613983bbe600765'].privateKey;
  const accountB = web3.eth.accounts.privateKeyToAccount(privateKeyB);
  var accountBBalance = web3.utils.fromWei(await web3.eth.getBalance(accountB.address));
  console.log("Account B has balance of: " + accountBBalance);

  // send some eth from A to B
  const txn = {
    nonce: web3.utils.numberToHex(await web3.eth.getTransactionCount(accountA.address)), // A가 가진 거래 개수
    from: accountA.address, // 보내는 사람
    to: besu.member3.accountAddress,  // 받는 사람
    value: "0x10",  //amount of eth to transfer 물품값
    gasPrice: "0x3e8", //ETH per unit of gas
    gasLimit: "0x24A22" //max number of gas units the tx is allowed to use
  };

  console.log("create and sign the txn")
  const signedTx = await web3.eth.accounts.signTransaction(txn, accountA.privateKey);
  console.log("sending the txn")
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log("tx transactionHash: " + txReceipt.transactionHash);

  //After the transaction there should be some ETH transferred
  accountABalance = web3.utils.fromWei(await web3.eth.getBalance(accountA.address));
  console.log("Account A has an updated balance of: " + accountABalance);
  accountBBalance = web3.utils.fromWei(await web3.eth.getBalance(besu.member3.accountAddress));
  console.log("Account B has an updated balance of: " + accountBBalance);

}

if (require.main === module) {
  main();
}

module.exports = exports = main
