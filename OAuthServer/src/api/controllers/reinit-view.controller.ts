import { Request, Response } from "express";

export const reinitView = async (req: Request, res: Response) =>
  res.render("reinit");
