import User from "../../../models/UserModel";
import { dbConnect } from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongoose";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    await dbConnect();
    const user = await User.findById(req.query.id).select("+password");
    if (user && (await user.comparePassword(req.body.oldPassword))) {
      await User.updateOne(
        {
          _id: req.query.id,
        },
        {
          $set: {
            password: await bcrypt.hash(req.body.newPassword, 10),
          },
        }
      );
      res.status(200).json({ message: "Your password has been updated!" });
    } else
      res.status(409).json({ message: "Current password does not match!" });
  }
}
