import { Request, Response } from "express";

export const registerView = async (req: Request, res: Response) => {
  const { r } = req.query;
  res.render("register", { requestId: r });
};
