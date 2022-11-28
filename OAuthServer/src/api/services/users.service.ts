import { getUserByUserNameAndPassword } from "../../db/dal/users.dal";
import { UsersOutput } from "../../db/models/users.model";
import { UsersDTO } from "../dtos/users.dto";
import { toUsersDTO } from "../mappers/users.mapper";

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
