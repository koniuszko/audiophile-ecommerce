import {getToken} from "next-auth/jwt";
import {GetServerSidePropsContext, NextApiRequest} from "next";

const secret = process.env.NEXTAUTH_SECRET

export const hasToken = async (req: GetServerSidePropsContext["req"]) => {
    const token = await getToken({req, secret})
    if (!token) {
        return false
    }
    return true
}

export const isAdmin = async (req: NextApiRequest) => {
    const token = await getToken({req, secret})
    if (!token || token.user.role !== 'OWNER') {
        return false
    }
    return true
}