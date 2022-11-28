import { UsersInput, UsersOutput } from "../../db/models/users.model";
import { UsersDTO } from "../dtos/users.dto";

export const toUsersDTO = (user: UsersOutput): UsersDTO => {
  return {
    id: user.id,
    password: user.password,
    last_login: user.last_login,
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    application_id: user.application_id,
  };
};

export const toUsers = (user: UsersDTO): UsersInput => {
  return {
    password: user.password,
    last_login: user.last_login,
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    application_id: user.application_id,
  };
};
