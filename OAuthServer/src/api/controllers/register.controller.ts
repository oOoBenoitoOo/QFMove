import { Request, Response } from "express";
import { createUsers, getByEmail } from "../services/users.service";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  try {
    // Get user input
    const { firstName, lastName, email, password, applicationId, userName } =
      req.body;

    // Validate user input
    if (!(email && password && firstName && lastName))
      return res.status(400).send("All input is required");

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await getByEmail(email);

    if (oldUser)
      return res.status(409).send("User Already Exist. Please Login");

    //Encrypt user password
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await createUsers({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
      application_id: 1,
      last_login: new Date(),
      username: userName,
    });
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};
