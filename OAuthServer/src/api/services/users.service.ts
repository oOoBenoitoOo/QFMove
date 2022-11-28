import {
  create,
  getUserByEmail,
  getUserByUserNameAndPassword,
} from "../../db/dal/users.dal";
import { UsersOutput } from "../../db/models/users.model";
import { UsersDTO } from "../dtos/users.dto";
import { toUsers, toUsersDTO } from "../mappers/users.mapper";

export const createUsers = async (payload: UsersDTO): Promise<UsersDTO> => {
  const model = toUsers(payload);
  const request = await create(model);
  return toUsersDTO(request);
};

export const getByUserNameAndPassword = async (
  username: string,
  password: string
): Promise<UsersDTO> => {
  const user: UsersOutput = await getUserByUserNameAndPassword(
    username,
    password
  );
  return toUsersDTO(user);
};

export const getByEmail = (email: string) => getUserByEmail(email);
