import { Request, Response } from "express";
import { createCode } from "../services/codes.service";
import { destroyRequest, getByRequestId } from "../services/requests.service";
import { getByEmail } from "../services/users.service";
import { randomString } from "./../../helper";
import bcrypt from "bcrypt";

export const approve = async (req: Request, res: Response) => {
  const { email, password, requestId } = req.body;
  if (!email) return res.status(401).send("Error: wrong email ");

  const user = await getByEmail(email);

  if (!user && (await bcrypt.compare(password, user!.password)))
    return res.status(401).send("Error: wrong password ");

  const clientReq = await getByRequestId(requestId);

  await destroyRequest(requestId);
  if (!clientReq) return res.status(401).send("Error: unknow request");

  const code = randomString();
  await createCode({
    code,
    content: {
      userName: user?.username,
      clientReq,
      userId: user?.id,
    },
    user_id: user?.id!,
  });

  const { redirect_uri, state } = clientReq.content;
  const url = new URL(redirect_uri);
  url.searchParams.set("code", code);
  url.searchParams.set("state", state);
  res.redirect(url.toString());
};
