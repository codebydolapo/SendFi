import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { createStore } from "redux";
import { allReducers } from "../reducers/reducers";
import { Provider } from "react-redux";
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygonMumbai } from 'wagmi/chains'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../globals.css";
import * as dotenv from "dotenv";
dotenv.config();


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const store = createStore(allReducers);

const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [polygonMumbai.id]: http(),
    },
})

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {


    const config = getDefaultConfig({
        appName: 'My RainbowKit App',
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
        chains: [mainnet, sepolia, polygonMumbai],
        ssr: true, // If your dApp uses server side rendering (SSR)
    });

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
            <Provider store={store}>
                <WagmiProvider config={config}>
                    <QueryClientProvider client={queryClient}>
                        <RainbowKitProvider>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </RainbowKitProvider>
                    </QueryClientProvider>
                </WagmiProvider>
            </Provider>

    )
}