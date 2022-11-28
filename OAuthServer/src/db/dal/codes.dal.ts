import { Codes, CodesInput, CodesOutput } from "../models/codes.model";

export const create = async (payload: CodesInput): Promise<CodesOutput> =>
  await Codes.create(payload);

export const destroy = async (code: string): Promise<number> =>
  await Codes.destroy({
    where: {
      code,
    },
  });

export const getCodesByCode = async (code: string): Promise<CodesOutput> => {
  const result = await Codes.findOne({
    where: {
      code,
    },
  });
  if (!result) throw new Error("not found");
  return result;
};
