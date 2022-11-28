import { Request, Response } from "express";

export const registerView = async (req: Request, res: Response) =>
  res.render("register");
