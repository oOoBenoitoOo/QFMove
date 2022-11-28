import { ApplicationsOuput } from "../../db/models/applications.model";
import { ApplicationsDTO } from "../dtos/applications.dto";
import { toScopesDTO } from "./scopes.mapper";

export const toApplicationsDTO = (
  application: ApplicationsOuput
): ApplicationsDTO => {
  return {
    id: application.id,
    client_id: application.client_id,
    client_secret: application.client_secret,
    name: application.name,
    redirect_uri: application.redirect_uri,
    scopes: application.scopes.map(toScopesDTO),
  };
};
