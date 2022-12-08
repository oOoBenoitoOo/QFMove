import {
  create,
  getPasswordLinksByUuid,
  destroy,
} from "../../db/dal/password-links.dal";
import { PasswordLinksDTO } from "../dtos/password-links.dto";
import {
  toPasswordLinks,
  toPasswordLinksDTO,
} from "../mappers/password-links.mapper";

export const createPasswordLink = async (
  payload: PasswordLinksDTO
): Promise<PasswordLinksDTO> => {
  const model = toPasswordLinks(payload);
  const request = await create(model);
  return toPasswordLinksDTO(request);
};

export const destroyPasswordLink = async (uuid: string): Promise<number> =>
  await destroy(uuid);

export const getByUuid = async (uuid: string): Promise<PasswordLinksDTO> => {
  const model = await getPasswordLinksByUuid(uuid);
  return toPasswordLinksDTO(model);
};
