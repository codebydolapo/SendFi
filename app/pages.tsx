'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
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



const store = createStore(allReducers);

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
  },
})

const queryClient = new QueryClient()


export default function Home() {


  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, sepolia, polygonMumbai],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });


  return (
    <Provider store={store}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <main className="flex min-h-screen flex-col items-center justify-between">
              <Navbar />
              <div className={`flex-1 w-full mt-[60px] flex  items-center justify-center`}>
                <div className={`w-[30rem] h-[30rem] flex-col border-[1px] border-grey rounded-xl flex items-center justify-center`}>
                  <img src={'/images/coatofarms.png'} className={"w-[50%]"} alt="" />
                  <h1 className={`text-[#0b8454] font-extrabold mt-[2rem] text-5xl`}>Welcome!</h1>
                  <h3 className={`text-[#000] font-normal text-xs`}>Please Connect Your E-Naira Wallet!</h3>
                  <section
                    className={`w-[12rem] h-[45px] flex justify-center items-center mt-[2rem]`}
                  >
                    <ConnectButton
                      accountStatus={{
                        smallScreen: "avatar",
                        largeScreen: "full",
                      }}
                      showBalance={{
                        smallScreen: false,
                        largeScreen: false,
                      }}
                    />
                  </section>

                </div>
              </div>
            </main>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}
