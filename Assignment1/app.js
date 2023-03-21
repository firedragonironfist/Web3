const express = require('express');
const app = express();
const web3 = require('@solana/web3.js');
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const devnetBtn = document.getElementById('devnet-btn');

devnetBtn.addEventListener('click', () => {
  const senderPublicKey = new web3.PublicKey("CgGHXBHJdrdfsLSc3y3VBS1wJGxGjHJWEPUtgUPuTFdj");
  const recipientAddress = document.getElementById('recipient-address').value;
  const amount = Number(document.getElementById('amount').value);
  const recipientPublicKey = new web3.PublicKey(recipientAddress);

  const transaction = new web3.Transaction().add(
    web3.SystemProgram.transfer({
      fromPubkey: senderPublicKey,
      toPubkey: recipientPublicKey,
      lamports: web3.LAMPORTS_PER_SOL * amount,
    })
  );
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});