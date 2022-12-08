import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  destroyPasswordLink,
  getByUuid,
} from "../services/password-links.service";
import { getById, updateUsers } from "../services/users.service";

export const reinitPassword = async (req: Request, res: Response) => {
  const { reinitId, password, passwordConfirm } = req.body;
  if (!reinitId) return res.status(401).send("Error: Link Id doesn't match");
  if (password !== passwordConfirm)
    return res.status(401).send("Error: passwords don't match");
  const idExist = await getByUuid(reinitId);
  if (!idExist) return res.status(401).send("Error: Link Id doesn't match");
  const user = await getById(idExist.user_id);
  if (!user) return res.status(401).send("Error: User doesn't exist");
  const encryptedUserPassword = await bcrypt.hash(password, 10);
  user.password = encryptedUserPassword;
  await updateUsers(user);
  await destroyPasswordLink(idExist.uuid);
  res.render("authorize");
};
