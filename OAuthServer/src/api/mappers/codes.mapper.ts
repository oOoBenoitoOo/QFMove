import { CodesInput, CodesOutput } from "../../db/models/codes.model";
import { CodesDTO } from "../dtos/codes.dto";

export const toCodesDTO = (code: CodesOutput): CodesDTO => {
  return {
    id: code.id,
    content: code.content,
    code: code.code,
    user_id: code.user_id,
  };
};

export const toCodes = (code: CodesDTO): CodesInput => {
  return {
    content: code.content,
    code: code.code,
    user_id: code.user_id,
  };
};
