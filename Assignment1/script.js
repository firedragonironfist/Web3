const web3 = require('@solana/web3.js');
const connection = require('./connection');
const bs58 = require('bs58');
const Buffer = require('buffer').Buffer;

// Wait for the page to finish loading
window.addEventListener('load', function () {
    // Get the HTML elements we need
    const addressInput = document.getElementById('recipient-address')
    const amountInput = document.getElementById('amount')
    const devnetButton = document.getElementById('devnet-btn')
    const testnetButton = document.getElementById('testnet-btn')
    const solValueSpan = document.getElementById('sol-value')
  
    // Set the default sol value
    const defaultSolValue = 0.1
    solValueSpan.innerText = defaultSolValue
  
    // Attach event listeners to the buttons
    devnetButton.addEventListener('click', function () {
      sendSolTokens('https://api.devnet.solana.com', addressInput.value, amountInput.value)
    })
  
    testnetButton.addEventListener('click', function () {
      sendSolTokens('https://api.testnet.solana.com', addressInput.value, amountInput.value)
    })
  
    // Function to send Sol tokens
    async function sendSolTokens(apiUrl, recipientAddress, amount) {
      // Load the Solana Web3.js library
      const web3 = require('@solana/web3.js')
  
      // Set up the connection to the Solana network
      const connection = new web3.Connection(apiUrl)
  
      // Set up the devnet bank account
      const devnetPrivateKey = new Uint8Array([CgGHXBHJdrdfsLSc3y3VBS1wJGxGjHJWEPUtgUPuTFdj]) // Insert your devnet private key here
      const devnetAccount = new web3.Account(devnetPrivateKey)
  
      // Construct the Solana transaction
      const transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
          fromPubkey: devnetAccount.publicKey,
          toPubkey: new web3.PublicKey(recipientAddress),
          lamports: web3.LAMPORTS_PER_SOL * amount
        })
      )
  
      // Sign and send the transaction
      const signature = await web3.sendAndConfirmTransaction(connection, transaction, [devnetAccount])
  
      // Show a success message to the user
      alert(`Transaction sent with signature: ${signature}`)
    }
  })

  