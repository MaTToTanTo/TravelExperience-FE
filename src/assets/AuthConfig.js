export const msalConfig = {
  auth: {
    clientId: "f2c2a3a8-f3ff-4a4d-a743-871d53aa8c2e", // Replace with your Azure AD app's client ID
    authority: "https://login.microsoftonline.com/aa8871e0-d3de-4dff-a0cd-b89d44241803", // Replace with your tenant ID
    redirectUri: "https://localhost:5173/", // Or your deployed app's URI
    postLogoutRedirectUri: "https://localhost:5173/",// or demo live url
  },
  cache: {
    cacheLocation: "localStorage", // or "sessionStorage"
    storeAuthStateInCookie: false,
  },
};