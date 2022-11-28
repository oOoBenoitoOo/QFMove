import { Request, Response } from "express";
import { createAccessToken } from "../services/accesstokens.service";
import { getApplicationsByUUID } from "../services/applications.service";
import { destroyCode, getByCode } from "../services/codes.service";
import { decodeAuthCredentials } from "./../../helper";
import jwt from "jsonwebtoken";
import { config } from "../../server/server.config";

export const token = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send("Error: authorization");
    return;
  }
  const { clientId, clientSecret } = decodeAuthCredentials(authorization);
  const client = await getApplicationsByUUID(clientId);
  if (!client) {
    res.status(401).send("Error: Client Id doesn't match");
    return;
  }
  if (client.client_secret !== clientSecret) {
    res.status(401).send("Error: Client secret doesn't match");
    return;
  }
  const { code } = req.body;
  const authorizationCode = await getByCode(code);
  if (!authorizationCode) {
    res.status(401).send("Error: code doesn't match");
    return;
  }
  const { userName, clientReq, userId } = authorizationCode.content;
  await destroyCode(code);

  const token = jwt.sign(
    {
      userName,
      scope: clientReq.content.scope,
    },
    config.privateKey,
    {
      algorithm: "RS256",
      expiresIn: 300,
      issuer: "http://localhost:" + config.port,
    }
  );
  var date = new Date();
  date.setDate(date.getDate() + 1);

  // add scopes many to many => scope: clientReq.content.scope,
  await createAccessToken({
    token,
    expires: date,
    user_id: userId,
  });
  res.json({
    access_token: token,
    token_type: "Bearer",
    scope: clientReq.content.scope,
  });
};
