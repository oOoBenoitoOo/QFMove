import { create, getCodesByCode, destroy } from "../../db/dal/codes.dal";
import { CodesDTO } from "../dtos/codes.dto";
import { toCodes, toCodesDTO } from "../mappers/codes.mapper";

export const createCode = async (payload: CodesDTO): Promise<CodesDTO> => {
  const model = toCodes(payload);
  const request = await create(model);
  return toCodesDTO(request);
};

export const destroyCode = async (code: string): Promise<number> =>
  await destroy(code);

export const getByCode = async (code: string): Promise<CodesDTO> => {
  const model = await getCodesByCode(code);
  return toCodesDTO(model);
};
