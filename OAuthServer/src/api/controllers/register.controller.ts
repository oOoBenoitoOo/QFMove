import { Request, Response } from "express";
import { createUsers, getByEmail } from "../services/users.service";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  try {
    // Get user input
    const { firstName, lastName, email, password, userName, requestId } =
      req.body;

    // Validate user input
    if (!(email && password && firstName && lastName))
      return res.status(400).send("All input is required");

    const [passwordEntered, confirm] = password;
    if (passwordEntered !== confirm)
      return res.status(400).send("Password are not same.");
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await getByEmail(email);

    if (oldUser)
      return res.status(409).send("User Already Exist. Please Login");

    //Encrypt user password
    const encryptedUserPassword = await bcrypt.hash(passwordEntered, 10);

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
    res.render("login", {
      requestId,
      error: "",
    });
  } catch (err) {
    console.log(err);
  }
};
