import {dbConnect} from "@/utils/dbConnect";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import {buffer} from 'micro'
import Order from "@/models/OrderModel";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    const signingSecret = process.env.STRIPE_SIGNING_SECRET;
    const payload = await buffer(req)
    const signature = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(payload, signature, signingSecret);

    if (event?.type === 'checkout.session.completed') {
        console.log(event)
        const metadata = event.data?.object.metadata;
        const paymentStatus = event.data?.object.payment_status;
        if (metadata?.orderId && paymentStatus === 'paid') {
            const order = await Order.findByIdAndUpdate(metadata.orderId, {paid: 1})
        }
    }
    res.json('ok')
}
export const config = {
    api: {
        bodyParser: false,
    }
}