import NextAuth, {SessionOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/UserModel";
import {dbConnect} from "@/utils/dbConnect";

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
                remember: {label: "Remember", type: "remember"}
            },
            authorize: async (credentials) => {
                await dbConnect().catch(err => {
                    throw new Error(err)
                })
                const user = await User.findOne({email: credentials?.email}).select('+password')
                if (!user) {
                    throw new Error('No user with a matching email was found.')
                }
                const pwValid = await user.comparePassword(credentials?.password)
                if (!pwValid) {
                    throw new Error('Password is invalid')
                }
                return user
            }

        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.user = {
                    id: user.id,
                    email: user.email
                }
            }
            return token
        },
        session: async ({session, token}) => {
            if (token) {
                session.user = token.user
            }
            return session
        }
    },
    pages: {
        signIn: '/',
        signOut: '/'
    }

})