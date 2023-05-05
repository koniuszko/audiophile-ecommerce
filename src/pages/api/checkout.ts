import {dbConnect} from "@/utils/dbConnect";
import {NextApiRequest, NextApiResponse} from "next";
import {cartItem, IProduct, StripeCheckoutProps} from "@/interfaces/interfaces" ;
import Order from "@/models/OrderModel";


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"});
        return;
    }

    const {address, products, paymentMethod} = req.body;

    console.log(address, products, paymentMethod);

    let cartItems: StripeCheckoutProps[] = [];

    products.forEach((item: cartItem) => {
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

    const order = await Order.create({
        address,
        orderDate: new Date().toISOString(),
        items: products,
        paymentMethod: paymentMethod,
        paid: 0
    })

    if (paymentMethod === "credit-card") {

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
            success_url: `${req.headers.origin}/?success=true&orderId=${order._id.toString()}`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
            metadata: {orderId: order._id.toString()}
        });

        res.status(200).json({url: session.url})
    } else {
        res.status(200).json({url: `/?success=true&orderId=${order._id.toString()}`})
    }
}