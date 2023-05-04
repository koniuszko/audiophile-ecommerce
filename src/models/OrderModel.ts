import {model, models, Schema} from "mongoose";
import {IOrder, IProduct} from "@/interfaces/models/models_interfaces";

const orderModel = new Schema<IOrder>({
    userId: {
        type: String,
        required: false,
    },
    address: {
        type: Object,
        required: true,
    },
    orderDate: {
        type: String,
        required: true,
    },
    items: {
        type: [],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paid: {
        type: Number,
        required: true,
    }
})

export default models.Order || model('Order', orderModel)

