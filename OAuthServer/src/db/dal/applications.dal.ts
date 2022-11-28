import { Applications, ApplicationsOuput } from "../models/applications.model";
import { Scopes } from "../models/scopes.model";

export const getByUUID = async (uuid: string): Promise<ApplicationsOuput> => {
  const client = await Applications.findOne({
    where: {
      client_id: uuid,
    },
    include: [
      {
        model: Scopes,
        required: true,
        right: true,
      },
    ],
  });
  if (!client) {
    throw new Error("not found");
  }
  return client;
};
