import User from "../model/userSchema.js";
import bcrypt from "bcryptjs";

import UserDetail from "../model/userDetailSchema.js";

export const userSignup = async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(422).json({ error: "Fill all the fields carefully" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    const user = new User({
      firstname,
      lastname,
      email,
      password,
    });
    await user.save();
    res.status(200).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error while register user" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data!" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.status(200).json({ message: "User login successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error while login user" });
  }
};

export const userDetails = async (req, res) => {
  console.log(req.body);
  const { AppHRA, Bas, FA, HRA, Inv, LTA, Med, Rent, metro } = req.body;

  if (
    !AppHRA ||
    !Bas ||
    !FA ||
    !HRA ||
    !Inv ||
    !LTA ||
    !Med ||
    !Rent ||
    !metro
  ) {
    return res.status(422).json({ error: "Fill all the fields carefully" });
  }
  try {
    const userDetail = new UserDetail({
      AppHRA,
      Bas,
      FA,
      HRA,
      Inv,
      LTA,
      Med,
      Rent,
      metro,
    });
    await userDetail.save();
    res.status(200).json({ message: "Data stored successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error while register user" });
  }
};
