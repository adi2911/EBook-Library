export const oktaConfig = {
  clientId: "Wgfl8NR1KbY3rWEZiVxVQBADSLoSowlw",
  issuer: "http://dev-jcrfkynsbl7yk836.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
