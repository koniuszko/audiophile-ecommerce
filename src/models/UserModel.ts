import {model, models, Schema} from "mongoose";
import bcrypt from 'bcrypt';
import validator from "validator";
import {IUser} from "@/interfaces/interfaces";


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator?.isEmail, "Please enter a valid email."]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        required: true,
        default: "CUSTOMER",
    },
    address: {
        type: Object,
        required: false,
    },
    orders: {
        type: [],
        required: false,
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password)
}


export default models.User || model('User', userSchema)