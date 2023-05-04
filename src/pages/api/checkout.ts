import {dbConnect} from "@/utils/dbConnect";
import {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "@/interfaces/models/models_interfaces";
import Order from "@/models/OrderModel";


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    await dbConnect();

    if (req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    const {address, products} = req.body;

    console.log(address, products);

    interface productsProps {
        product: IProduct,
        quantity: number,
    }

    type  cartItemsProps = {
        quantity: number,
        price_data: {
            currency: string,
            product_data: {
                name: string,
            },
            unit_amount: number,
        }
    }


    let cartItems: cartItemsProps[] = [];

    products.forEach((item: productsProps) => {
        cartItems.push({
            quantity: item.quantity,
            price_data: {
                currency: 'USD',
                product_data: {
                    name: item.product.productName
                },
                unit_amount: item.product.price * 100
            }
        })
    })

    console.log(cartItems);


    const order = await Order.create({
        address,
        orderDate: new Date().toISOString(),
        items: products,
        paymentMethod: 'credit-card',
        paid: 0
    })

    const session = await stripe.checkout.sessions.create({
        shipping_options: [{
            shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                    amount: 5000,
                    currency: 'USD'
                },
                display_name: 'Standard shipping',
            }
        }],
        line_items: cartItems,
        mode: 'payment',
        customer_email: address.email,
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        metadata: {orderId: order._id.toString()}
    });

    res.status(200).json({url: session.url})
}