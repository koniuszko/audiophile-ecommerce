import type {AppProps} from 'next/app'
import {store} from '../store/store'
import {Provider} from 'react-redux'
import Head from "next/head";
import {GlobalStyle} from "@/styles/global";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Audiophile E-Commerce</title>
                <meta name="description" content="FrontendMentor Challenge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Provider store={store}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </Provider>
        </>

    )
}
