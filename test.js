const sdk = require('node-appwrite');

const client = new sdk.Client();

client
    .setEndpoint('https://appwrite2.onaixia.com/v1') // Your API Endpoint
    .setProject('66715b0d00229a4efa1d') // Your project ID
    .setKey('ab6099e7d72cc2bdb1fd23b409b2aa4e195fc1fe4e5bb227a96ce28b9080ac0fae22c4ed8e54bdfeb01845807155a651604618403a2c6c27d2c878af6e187f3a65c59bfd8ce475f28c6ad3063d7c9cd5aab2d4a91c46d6dd664090726020513575a4d1095234b86bc1e1ae3716d0afe2324b0f23e3dc47967ef322cc528c07d5') // Your secret API key
;

let users = new sdk.Users(client);

let promise = users.get('623b66a849afa34b5d4e');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});