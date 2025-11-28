import { TryCatch } from "../middlewares/error";
import { User } from "../models/user";
import bcrypt from "bcryptjs"

export const signUp = TryCatch(async () => {
  const { email, name, username, password } = req.body;
  const user = await User.findOne({ $or: [{ email }, { username }] });
  if (user) {
    res.status(409).json({message:"user already exists"})
  }

  const hashPassword = bcrypt.hashSync(password,10);
  const newUser = new User({
    email: email,
    username: username,
    name: username,
    password: hashPassword
  }) 
  await newUser.save()
  return res.status(201).json({
    success: true,
    message: `Welcome, ${user.name}`,
});
});
