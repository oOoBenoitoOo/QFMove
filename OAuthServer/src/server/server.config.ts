import fs from "fs";

export const config = {
  port: 9001,
  privateKey: fs.readFileSync("assets/private_key.pem"),
  clientId: "my-client",
  clientSecret: "zETqHgl0d7ThysUqPnaFuLOmG1E=",
  redirectUri: "http://localhost:9003/callback",

  authorizationEndpoint: "http://localhost:9001/authorize",
};
