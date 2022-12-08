import { Request, Response } from "express";
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
    return res.status(401).send("Error: Client Id doesn't match");
  }
  if (client.client_secret !== clientSecret) {
    return res.status(401).send("Error: Client secret doesn't match");
  }
  const { code } = req.body;
  const authorizationCode = await getByCode(code);
  if (!authorizationCode) {
    return res.status(401).send("Error: code doesn't match");
  }
  const { userName, clientReq, userId, email } = authorizationCode.content;
  await destroyCode(code);

  const token = jwt.sign(
    {
      userName,
      userId,
      scope: clientReq.content.scope,
    },
    config.privateKey,
    {
      algorithm: "RS256",
      expiresIn: "50ms",
      issuer: "http://localhost:" + config.port,
    }
  );

  const refreshToken = jwt.sign(
    {
      userName,
      email,
      scope: clientReq.content.scope,
    },
    config.privateKey,
    {
      algorithm: "RS256",
      expiresIn: "10m",
      issuer: "http://localhost:" + config.port,
    }
  );

  res.json({
    access_token: token,
    refresh_token: refreshToken,
    token_type: "Bearer",
    scope: clientReq.content.scope,
  });
};
