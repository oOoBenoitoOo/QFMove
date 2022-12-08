import {
  PasswordLinksInput,
  PasswordLinksOutput,
} from "../../db/models/password-links.model";
import { PasswordLinksDTO } from "../dtos/password-links.dto";

export const toPasswordLinksDTO = (
  passwordLink: PasswordLinksOutput
): PasswordLinksDTO => {
  return {
    id: passwordLink.id,
    uuid: passwordLink.uuid,
    user_id: passwordLink.user_id,
  };
};

export const toPasswordLinks = (
  passwordLink: PasswordLinksDTO
): PasswordLinksInput => {
  return {
    uuid: passwordLink.uuid,
    user_id: passwordLink.user_id,
  };
};
