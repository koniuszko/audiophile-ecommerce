import mongoose from "mongoose";

const USERS_MONGODB_URI: string = process.env.USERS_DB_URI || "";


if (!USERS_MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable")
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {conn: null, promise: null}
}

export async function dbUsersConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts: {} = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        cached.promise = mongoose.connect(USERS_MONGODB_URI, opts).then(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

// export async function dbOrdersConnect() {
//     if (cached.conn) {
//         return cached.conn
//     }
//
//     if (!cached.promise) {
//         const opts = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//
//         cached.promise = mongoose.connect(ORDERS_MONGODB_URI, opts).then(mongoose => {
//             return mongoose
//         })
//     }
//     cached.conn = await cached.promise
//     return cached.conn
// }