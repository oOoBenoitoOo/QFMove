import { Request, Response } from "express";
import { getByEmail } from "../services/users.service";
import { v4 as uuidv4 } from "uuid";
import { createPasswordLink } from "../services/password-links.service";

export const reinit = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await getByEmail(email);

  if (!user)
    return res.render("reinit", {
      error: "Il n'y a aucun compte relié à cet email.",
    });

  await createPasswordLink({
    user_id: user?.id,
    uuid: uuidv4(),
  });

  res.render("reinit-confirm", {
    color: "green",
    message:
      "Un email avec un lien pour reinitialiser votre mot de passe vous a été envoyé",
  });
};
