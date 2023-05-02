import {model, models, Schema} from "mongoose";
import {IProduct} from "@/interfaces/models/models_interfaces";

const productModel = new Schema<IProduct>({
    productName: {
        type: String,
        required: true,
    },
    productTitle: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive."]
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    features: {
        type: [],
        required: true,
    },
    inTheBox: {
        type: [],
    },
    isNewProduct: {
        type: Boolean,
        required: false,
    }
})

export default models.Product || model('Product', productModel)

