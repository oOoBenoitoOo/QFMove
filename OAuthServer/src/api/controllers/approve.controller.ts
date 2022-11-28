import { Request, Response } from "express";
import { createCode } from "../services/codes.service";
import { destroyRequest, getByRequestId } from "../services/requests.service";
import { getByUserNameAndPassword } from "../services/users.service";
import { randomString } from "./../../helper";

export const approve = async (req: Request, res: Response) => {
  const { userName, password, requestId } = req.body;
  if (!userName) {
    res.status(401).send("Error: wrong userName ");
    return;
  }
  const user = await getByUserNameAndPassword(userName, password);
  if (!user) {
    res.status(401).send("Error: wrong password ");
    return;
  }
  const clientReq = await getByRequestId(requestId);
  await destroyRequest(requestId);
  if (!clientReq) {
    res.status(401).send("Error: unknow request");
    return;
  }
  const code = randomString();
  await createCode({
    code,
    content: {
      userName,
      clientReq,
      userId: user.id,
    },
    user_id: user.id!,
  });

  const { redirect_uri, state } = clientReq.content;
  const url = new URL(redirect_uri);
  url.searchParams.set("code", code);
  url.searchParams.set("state", state);
  res.redirect(url.toString());
};
