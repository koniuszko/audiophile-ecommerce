import User from "../../../models/UserModel";
import { dbConnect } from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    await dbConnect();
    const user = await User.findById(req.query.id);
    if (user) {
      await User.updateOne(
        {
          _id: req.query.id,
        },
        {
          $set: {
            address: req.body,
          },
        }
      );
      res.status(200).json({ message: "Your address has been updated!" });
    } else res.status(404).json({ message: "User not found!" });
  }
}
