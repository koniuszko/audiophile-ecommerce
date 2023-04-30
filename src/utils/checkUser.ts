import {getToken} from "next-auth/jwt";
import {resolveTitle} from "next/dist/lib/metadata/resolvers/resolve-title";

const secret = process.env.NEXTAUTH_SECRET

export const hasToken = async (req) => {
    const token = await getToken({req, secret})
    if (!token) {
        return false
    }
    return true
}

export const isAdmin = async (req) => {
    const token = await getToken({req, secret})
    if (!token || token.user.role !== 'admin') {
        return false
    }
    return true
}