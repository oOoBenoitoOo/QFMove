import { create } from "../../db/dal/accesstokens.dal";
import { AccessTokensDTO } from "../dtos/accesstokens.dto";
import {
  toAccessTokens,
  toAccessTokensDTO,
} from "../mappers/accesstokens.mapper";

export const createAccessToken = async (
  payload: AccessTokensDTO
): Promise<AccessTokensDTO> => {
  const model = toAccessTokens(payload);
  const accesstoken = await create(model);
  return toAccessTokensDTO(accesstoken);
};
