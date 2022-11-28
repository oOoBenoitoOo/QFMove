import {
  AccessTokensOutput,
  AccessTokensInput,
} from "../../db/models/accesstokens.model";
import { AccessTokensDTO } from "../dtos/accesstokens.dto";

export const toAccessTokensDTO = (
  accesstoken: AccessTokensOutput
): AccessTokensDTO => {
  return {
    id: accesstoken.id,
    expires: accesstoken.expires,
    token: accesstoken.token,
    user_id: accesstoken.user_id,
  };
};

export const toAccessTokens = (
  accesstoken: AccessTokensDTO
): AccessTokensInput => {
  return {
    expires: accesstoken.expires,
    token: accesstoken.token,
    user_id: accesstoken.user_id,
  };
};
