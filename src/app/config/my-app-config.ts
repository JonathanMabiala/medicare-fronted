export default{
    oidc: {
        clientId: `0oa41y7xybYfcYkIv5d7`,
        issuer: `https://dev-38594620.okta.com/oauth2/default`,
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        testing: {
          //disableHttpsCheck: `${OKTA_TESTING_DISABLEHTTPSCHECK}`
        }
    }
}
