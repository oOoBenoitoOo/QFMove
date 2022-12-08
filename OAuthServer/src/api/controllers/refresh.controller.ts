import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "../../server/server.config";
import jwt from "jsonwebtoken";

export const refreshtoken = async (req: Request, res: Response) => {
  const { refreshtoken } = req.body;
  let userInfo: any;
  try {
    console.log(refreshtoken, req.body);
    userInfo = verify(refreshtoken, config.publicKey, {
      algorithms: ["RS256"],
    });
  } catch (e) {
    res.status(401).send(`Error: refreshtoken not valid: ${e}`);
    return;
  }
  const token = jwt.sign(
    {
      userName: userInfo.userName,
      scope: userInfo.scope,
    },
    config.privateKey,
    {
      algorithm: "RS256",
      expiresIn: "10m",
    }
  );
  res.json({
    access_token: token,
    token_type: "Bearer",
    scope: userInfo.scope,
  });
};
