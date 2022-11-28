import { Request, Response } from "express";
import { getApplicationsByUUID } from "../services/applications.service";
import { createRequest } from "../services/requests.service";
import { containsAll, randomString } from "../../helper";

export const authorize = async (req: Request, res: Response) => {
  const { client_id, scope } = req.query;
  const client = await getApplicationsByUUID(client_id as string);
  if (!client) {
    res.status(401).send("Error: client not authorized");
    return;
  }

  if (
    typeof req.query.scope !== "string" ||
    !containsAll(
      client.scopes.map((scope: any) => scope.label),
      req.query.scope.split(" ")
    )
  ) {
    res.status(401).send("Error: invalid scopes requested");
    return;
  }
  const requestId: string = randomString();
  await createRequest({
    requestId,
    content: req.query as any,
    application_id: client.id!,
  });

  res.render("login", {
    client,
    scope,
    requestId,
  });
};
