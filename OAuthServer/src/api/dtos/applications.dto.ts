import { ScopesDTO } from "./scopes.dto";

export type ApplicationsDTO = {
  id?: number;
  client_id: string;
  redirect_uri: string;
  client_secret: string;
  name: string;
  scopes: ScopesDTO[];
};
