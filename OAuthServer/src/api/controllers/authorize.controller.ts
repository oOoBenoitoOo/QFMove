import { Request, Response } from "express";
import { getApplicationsByUUID } from "../services/applications.service";
import { createRequest } from "../services/requests.service";
import { containsAll, randomString } from "../../helper";

export const authorize = async (req: Request, res: Response) => {
  const { client_id, scope } = req.query;
  const client = await getApplicationsByUUID(client_id as string);
  if (!client) return res.status(401).send("Error: client not authorized");

  const requiredScope = containsAll(
    client.scopes.map((item: any) => item.label),
    (scope as string)?.split(" ")
  );
  if (typeof req.query.scope !== "string" || !requiredScope)
    return res.status(401).send("Error: invalid scopes requested");

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
