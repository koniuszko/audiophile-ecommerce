import {NextApiRequest, NextApiResponse} from "next";
import {dbConnect} from "@/utils/dbConnect";
import Product from "@/models/ProductModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            productName,
            productTitle,
            price,
            description,
            category,
            features,
            inTheBox,
            isNewProduct
        } = req.body;

        await dbConnect();
        const product = await Product.findOne({
            productName: req.body.productName,
        })
        if (!product) {
            const newProduct = Product.create({
                productName,
                productTitle,
                price,
                description,
                category,
                features,
                inTheBox,
                isNewProduct
            });
            res.status(201).json({message: "Product has been created!"})
        } else {
            res.status(409).json({message: "Product exists!"})
        }
    }
}