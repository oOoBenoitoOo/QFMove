import {
  PasswordLinks,
  PasswordLinksInput,
  PasswordLinksOutput,
} from "../models/password-links.model";

export const create = async (
  payload: PasswordLinksInput
): Promise<PasswordLinksOutput> => await PasswordLinks.create(payload);

export const destroy = async (uuid: string): Promise<number> =>
  await PasswordLinks.destroy({
    where: {
      uuid,
    },
  });

export const getPasswordLinksByUuid = async (
  uuid: string
): Promise<PasswordLinksOutput> => {
  const result = await PasswordLinks.findOne({
    where: {
      uuid,
    },
  });
  if (!result) throw new Error("not found");
  return result;
};
