import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import Head from "next/head";
import {GlobalStyle} from "@/styles/global";
import {SessionProvider} from "next-auth/react";
import {persistor, store} from "../store/store";
import {PersistGate} from "redux-persist/integration/react";


export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <>
            <Head>
                <title>Audiophile E-Commerce</title>
                <meta name="description" content="FrontendMentor Challenge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SessionProvider session={session}>
                        <GlobalStyle/>
                        <Component {...pageProps} />
                    </SessionProvider>
                </PersistGate>
            </Provider>
        </>

    )
}
