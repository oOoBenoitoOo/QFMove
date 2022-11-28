import { ScopesOutput } from "../../db/models/scopes.model";
import { ScopesDTO } from "../dtos/scopes.dto";

export const toScopesDTO = (scope: ScopesOutput): ScopesDTO => {
  return {
    id: scope.id,
    label: scope.label,
  };
};
