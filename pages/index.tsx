import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Navbar from '@/components/Navbar'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ShoppingBagIcon, BellAlertIcon, PaperAirplaneIcon, CubeTransparentIcon, BriefcaseIcon, NewspaperIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import SideBarItem from '@/components/SideBarItem'
import { Inter, Poppins } from 'next/font/google'
import MarketComponent from '@/components/MarketComponent'

// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// })

const Page: NextPageWithLayout = () => {




  return (
    // <Layout>
    //   {page}
    // </Layout>
    <main className={`flex h-[100vh] min-h-screen flex-row py-3`}>
      <div className={`w-[25%] h-full flex flex-col items-center justify-between`}>

        <div className={`w-full h-[8%] flex items-center justify-start px-3 `}>
          <div className={`w-[20%] flex items-center justify-center h-full`}>
            <img alt="" src="/images/avatar.png" className={`w-12 h-12 rounded-full`} />
          </div>
          <div className={`min-w-[40%]  h-full flex flex-col justify-center items-start`}>
            <p className={`text-lg font-bold`}>Adenike Badmus</p>
            <p className={`text-sm font-light text-[#000000c9]`}>@nikeh_b</p>
          </div>
          <div className={`w-[20%] h-full flex items-center justify-start`}>
            <p className={`text-xs text-white font-extrabold px-1 rounded-[20%] bg-[#1877F2] flex items-center justify-center`}>pro</p>
          </div>
        </div>


        <div className={`w-full h-[65%] flex flex-col items-center justify-around px-3`}>

          <div className={`w-full h-[10%] flex rounded-lg bg-[#FAF9F6]`}>
            <input type="text" className={`w-full h-[85%] outline-0 px-3 bg-inherit`} placeholder='Enter search query' />
            <div className={`w-[15%] h-full flex items-center justify-center`}>
              <MagnifyingGlassIcon className='w-6 text-[#a7f40c]' />
            </div>
          </div>

          <SideBarItem
            icon={<ShoppingBagIcon className='w-6 text-[#a7f40c]' />}
            title={"Markets"}
            selected={true}
          />

          <SideBarItem
            icon={<BellAlertIcon className='w-6' />}
            title={"Notifications"}
            selected={false}

          />

          <SideBarItem
            icon={<CubeTransparentIcon className='w-6' />}
            title={"Dashboard"}
            selected={false}
          />

          <SideBarItem
            icon={<PaperAirplaneIcon className='w-6' />}
            title={"Transactions"}
            selected={false}
          />

          <SideBarItem
            icon={<NewspaperIcon className='w-6' />}
            title={"News"}
            selected={false}
          />
        </div>



        <div className={`w-full h-[25%] p-3 flex items-end justify-center`}>
          {/* <div className={`w-72 h-full p-2 flex flex-col justify-between items-center`}>
            <h1 className={`text-xl font-bold mr-auto`}>New Update!</h1>

            <div className={`w-full h-[50%] flex flex-col justify-center items-start`}>
              <p className={`text-xs font-bold text-[#00000088] my-1`}>Added Messanger</p>
              <p className={`text-xs font-bold text-[#00000088] my-1`}>Cleaner Interface</p>
              <p className={`text-xs font-bold text-[#00000088] my-1`}>Bug Fixes</p>
            </div>

            <button className={`w-full h-10 rounded-lg bg-[#a7f40c] text-black font-bold`}>Update!</button>
          </div> */}
          <button className={`w-[90%] h-12 rounded-lg bg-[#a7f40c] text-black font-bold`}>Connect Wallet!</button>

        </div>


      </div>


      <div className={`w-[75%] h-full`}>

        <div className={`w-full h-[20%] flex`}>

          <div className={`w-[20%] h-full flex flex-col px-3`}>
            <div className={`w-full h-[50%] flex justify-start items-end py-2`}>
              <p className={`text-4xl font-bold text-[#000000c9]`}>Portfolio</p>
            </div>
            <div className={`w-full h-[50%] flex justify-start items-start py-2 `}>
              <p className={`text-sm font-bold text-[#0000005d]`}><b className='px-1 bg-[#a7f40c] text-black rounded-[20%]'>2.34%</b> in the last 24 hours</p>
            </div>
          </div>

          <div className={`w-[60%] h-full flex items-center justify-center`}>
            <div className={`w-[80%] h-12 flex rounded-lg bg-[#FAF9F6] border-[1px]`}>
              <input type="text" className={`w-full h-[85%] outline-0 px-3 bg-inherit`} placeholder='Enter search query' />
              <div className={`w-[15%] h-full flex items-center justify-center`}>
                <MagnifyingGlassIcon className='w-6 text-[#a7f40c]' />
              </div>
            </div>
          </div>

          <div className={`w-[20%] h-full flex items-center justify-center`}>
            <p className={`text-base font-bold text-[#0000005d]`}> Currency: </p>
            <p className={`text-base font-bold px-2 bg-[#a7f40c] rounded-[15%] mx-2`}> USD</p>
          </div>

        </div>

        <div className={`w-full h-[80%]`}>
          <MarketComponent/>
        </div>

      </div>


    </main>
  )
}

export default Page