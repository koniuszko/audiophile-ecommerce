import {dbConnect} from "@/utils/dbConnect";
import Product from "@/models/ProductModel";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await dbConnect();
        const products = await Product.find({
            productName: req.query.productName
        });
        res.status(200).json(products)
    }
}