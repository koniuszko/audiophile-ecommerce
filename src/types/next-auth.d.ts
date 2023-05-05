import {User} from "next-auth"

declare module "next-auth" {

    interface Session {
        user: User
    }

    interface SessionOptions {
        jwt?: boolean
    }

    interface User {
        role?: string,

    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: User,
    }
}