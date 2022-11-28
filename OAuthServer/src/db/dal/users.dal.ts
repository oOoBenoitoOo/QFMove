import { Users, UsersInput, UsersOutput } from "../models/users.model";
import { Op } from "sequelize";

export const create = async (payload: UsersInput): Promise<UsersOutput> =>
  await Users.create(payload);

export const getUserByUserNameAndPassword = async (
  username: string,
  password: string
): Promise<UsersOutput> => {
  const user = await Users.findOne({
    where: { [Op.and]: [{ password }, { username: username }] },
  });
  if (!user) {
    throw new Error("not found");
  }
  return user;
};

export const getUserByEmail = async (
  email: string
): Promise<UsersOutput | null> =>
  await Users.findOne({
    where: { email },
  });
