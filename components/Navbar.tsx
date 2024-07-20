'use client'
import {
  UserCircleIcon,
  CreditCardIcon,
  UserIcon
  // SearchIcon,
  // XIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAccount } from "../reducers/actions";
// import { ConnectButton } from "web3uikit";
import styles from "../styles/navbar.module.css";
// import { activateHamburger, deactivateHamburger } from "./reducers/actions";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Dropdown from "./dropdown/Dropdown";
import { useRouter } from 'next/router';


function Navbar() {

  const { address } = useAccount()
  const { data, error, status } = useEnsName({ address })

  const router = useRouter()


  return (
    <div
      className={`w-full h-[60px] transition duration-[500ms] bg-[#000] flex flex-row items-center space-between md:pl-[2rem] fixed top-0 left-0 z-[100] `}
    >
      <div className={`w-[50%] h-full flex items-center justify-between`}>
        <div
          className={`md:w-[30%] h-full flex items-center md:justify-center xs:w-[100%] xs:justify-start`}
        >
          <img
            className={`md:w-[40px] h-[40px] rounded-full md:mx-2 xs:w-[40px] xs:h-[40px] xs:mx-1`}
            alt=""
            src="/icons/logo.png"
          />
          <h1
            className={`font-extrabold md:text-4xl text-[#fff] xs:text-2xl`}
          >
            <b className={`text-[#0b8454]`}>Elect</b>ra
            {/* <b className={`text-[#1da1f2]`}>Elect</b>ra */}
          </h1>
        </div>
      </div>

      <div
        className={`w-[50%] h-full flex lg:justify-end xs:justify-end items-center`}
      >
        {address && <div
          className={`lg:w-[50%] h-full flex md:mx-0 xs:mx-2 md:w-[40%] xs:w-[70%] justify-center items-center`}
        >
          <UserIcon width={20} color={"white"} className={`m-3`} />
          <h3 className={`text-white font-bold`}>Hello, Emmanuel Chiedozie</h3>
        </div>
        }
        {router.pathname !== "/register" && <div
          className={`lg:w-[25%] h-full flex md:mx-0 xs:mx-2 md:w-[40%] xs:w-[70%] justify-center items-center`}
        >
          <section
            className={`w-[12rem] h-[45px] lg:text-sm xs:text-xs flex justify-center items-center rounded-lg text-[#fff]`}
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
        </div>}
      </div>
    </div>
  );
}

export default Navbar;
