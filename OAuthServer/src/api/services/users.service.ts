import {
  create,
  getUserByEmail,
  getUserById,
  getUserByUserNameAndPassword,
  update,
} from "../../db/dal/users.dal";
import { UsersOutput } from "../../db/models/users.model";
import { UsersDTO } from "../dtos/users.dto";
import { toUsers, toUsersDTO } from "../mappers/users.mapper";

export const createUsers = async (payload: UsersDTO): Promise<UsersDTO> => {
  const model = toUsers(payload);
  const request = await create(model);
  return toUsersDTO(request);
};

export const updateUsers = async (payload: UsersDTO): Promise<void> => {
  const model = toUsers(payload);
  await update(model);
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

export const getById = (id: number) => getUserById(id);
