import {dbConnect} from "@/utils/dbConnect";
import {NextApiRequest, NextApiResponse} from "next";
import Order from "@/models/OrderModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await dbConnect();
        const orders = await Order.find({'_id': req.query.id});
        console.log(req.query.id)
        res.status(200).json(orders);
    }
}