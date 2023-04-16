// Initialize the Auth0 SDK with your Auth0 domain and client ID
var auth0 = new Auth0({
domain: 'goobizstore.eu.auth0.com',
clientID: 'DvCnnvY4INUdGTCLAwJajH16Ozpdhr08',
redirectUri: 'http://goobiz.netlify.app/',    
scope: 'openid profile'
});

// Add click event listener to the sign-in button
document.getElementById('btn-login').addEventListener('click', function() {
// Trigger the Auth0 authentication flow
auth0.authorize();
}); 