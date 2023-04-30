import User from '../../models/UserModel'
import {dbConnect} from "@/utils/dbConnect";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await dbConnect();
        const user = await User.findOne({
            email: req.body.email,
        })
        if (!user) {
            const newUser = User.create(req.body);
            res.status(201).json({message: "User created!"})
        } else {
            res.status(409).json({message: "User exists!"})
        }
    }
}