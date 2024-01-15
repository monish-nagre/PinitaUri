const pinataSDK = require('@pinata/sdk');

// use in .env file
const pinataApiKey = 'YOUR_API_KEY';
const pinataApiSecret = 'YOUR_API_SECRET';

const pinata = new pinataSDK(pinataApiKey, pinataApiSecret);


// Your JSON object
const customTokenData = {
    "name": "Monish Custom Token",
    "symbol": "MCT",
    "description": "Created for demo purpose ;)",
    "image": "https://ipfs.io/ipfs/QmZNEyAxoq55x3jZofjmCdqG1ujpYaKh8TGNhLjdkwiHqz"
};

// Pin JSON object to IPFS via Pinata
pinata.pinJSONToIPFS(customTokenData)
    .then((result) => {
        console.log('IPFS Hash:', result.IpfsHash);
    })
    .catch((error) => {
        console.error('Error uploading to Pinata:', error);
    });

    