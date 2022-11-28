import {
  AccessTokens,
  AccessTokensInput,
  AccessTokensOutput,
} from "../models/accesstokens.model";

export const create = async (
  payload: AccessTokensInput
): Promise<AccessTokensOutput> => await AccessTokens.create(payload);
