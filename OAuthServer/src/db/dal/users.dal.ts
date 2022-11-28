import { Users, UsersOutput } from "../models/users.model";
import { Op } from "sequelize";

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
