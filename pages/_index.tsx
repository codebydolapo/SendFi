import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Navbar from '@/components/Navbar'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Inter, Poppins } from 'next/font/google'

const _Page: NextPageWithLayout = () => {
  //   return <p>hello world</p>
  // }

  const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  })

  // Page.getLayout = function getLayout(page: ReactElement) {
  return (
    // <Layout>
    //   {page}
    // </Layout>
    <main className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}>
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
  )
}

export default _Page