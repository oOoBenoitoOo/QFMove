import { Request, Response } from "express";
import { createCode } from "../services/codes.service";
import { destroyRequest, getByRequestId } from "../services/requests.service";
import { getByEmail } from "../services/users.service";
import { randomString } from "./../../helper";
import bcrypt from "bcrypt";

export const approve = async (req: Request, res: Response) => {
  const { email, password, requestId } = req.body;
  if (!email || !password || !requestId)
    return res.status(401).send("Error: form not conform ");

  const user = await getByEmail(email);
  if (!user)
    return res.render(`login`, { requestId, error: "Ce compte n'existe pas." });

  const validPassword = await bcrypt.compare(password, user!.password);
  if (!validPassword)
    return res.render(`login`, {
      requestId,
      error: "Mot de passe n'est pas valide.",
    });

  const clientReq = await getByRequestId(requestId);

  await destroyRequest(requestId);
  if (!clientReq)
    return res.render(`login`, {
      requestId,
      error: "Une erreur s'est produite (identifiant de la requête).",
    });

  const code = randomString();
  await createCode({
    code,
    content: {
      userName: user?.username,
      email,
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
