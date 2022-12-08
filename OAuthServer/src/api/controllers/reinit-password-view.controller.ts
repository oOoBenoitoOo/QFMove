import { Request, Response } from "express";
import { getByUuid } from "../services/password-links.service";

export const reinitPasswordView = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(401).send("Error: Link Id doesn't match");
  const idExist = await getByUuid(id);
  if (!idExist) return res.status(401).send("Error: Link Id doesn't match");
  res.render("new-password", { reinitId: idExist.uuid });
};
