import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Navbar from '@/components/Navbar'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button, FormControl, InputLabel, MenuItem, Select, Checkbox } from "@mui/material";
import {
    // SearchIcon,
    // XIcon,
} from "@heroicons/react/24/solid";
import { useState } from 'react'

const Register: NextPageWithLayout = () => {

    const [surname, setSurname] = useState("")
    const [firstName, setFirstName] = useState("")
    const [otherName, setOtherName] = useState("")
    const [NIN, setNIN] = useState("")
    const [gender, setGender] = useState("")
    const [acknowledgement, setAcknowledgement] = useState(false)



    const handleSurnameUpdate = (event: any) => {
        setSurname(event.target.value);
    };
    const handleFirstNameUpdate = (event: any) => {
        setFirstName(event.target.value);
    };
    const handleOtherNameUpdate = (event: any) => {
        setOtherName(event.target.value);
    };

    const handleNINUpdate = (event: any) => {
        setNIN(event.target.value);
    };

    const handleGenderUpdate = (event: any) => {
        // const handleChainChange = (_chain: string) => {
        setGender(event.target.value as string);
    }

    const handleAcknowledgement = () => {
        acknowledgement ? setAcknowledgement(false) : surname && firstName && otherName && NIN && setAcknowledgement(true)
    }

    return (
        // <Layout>
        //   {page}
        // </Layout>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <div className={`flex-1 w-full mt-[60px] flex  items-center justify-center`}>
                <div className={`w-[30rem] h-[35rem] flex-col border-[1px] border-grey rounded-xl flex items-center justify-center p-2`}>
                    <img src={'/images/coatofarms.png'} className={"w-[20%]"} alt="" />
                    <h1 className={`text-[#0b8454] font-extrabold mt-3 text-sm`}>Register And Become A Verified Voter!</h1>

                    <div className={`w-[90%] flex-1 flex flex-col items-center justify-around`}>
                        <div className={`flex flex-wrap`}>
                            <input
                                className={`w-[95%] h-[2.5rem] rounded-sm m-2 bg-inherit outline-none px-2 text-sm text-black border-[1px] border-grey `}
                                type="name"
                                placeholder="Surname"
                                value={surname}
                                onChange={handleSurnameUpdate}
                            />

                            <input
                                className={`w-[95%] h-[2.5rem] rounded-sm m-2 bg-inherit outline-none px-2 text-sm text-black border-[1px] border-grey `}
                                type="name"
                                placeholder="First Name"
                                value={firstName}
                                onChange={handleFirstNameUpdate}
                            />

                            <input
                                className={`w-[95%] h-[2.5rem] rounded-sm m-2 bg-inherit outline-none px-2 text-sm text-black border-[1px] border-grey `}
                                type="name"
                                placeholder="Other Name"
                                value={otherName}
                                onChange={handleOtherNameUpdate}
                            />

                            <input
                                className={`w-[95%] h-[2.5rem] rounded-sm m-2 bg-inherit outline-none px-2 text-sm text-black border-[1px] border-grey `}
                                type="name"
                                placeholder="Input your NIN"
                                value={NIN}
                                onChange={handleNINUpdate}
                            />
                        </div>



                        {/* <div className={`w-[95%] h-[5rem] bg-white rounded-lg px-2 flex items-start justify-around flex-col`}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel id="demo-simple-select-label" >I am...</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={handleGenderUpdate}
                                    className='h-[3.5rem] rounded-sm text-sm bg-white border-2'
                                >
                                    <MenuItem value={'Male'}>
                                        <div className={`w-full flex items-start justify-start`}>
                                            <h1 className={`text-sm`}>Male</h1>
                                            <SunIcon color={`#000`} width={20} className="mx-2" />
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={"Female"}>
                                        <div className={`w-full flex items-start justify-start`}>
                                            <h1 className={`text-sm`}>Female</h1>
                                            <MoonIcon color={`#000`} width={15} className="mx-2" />
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={"Other"}>
                                        <div className={`w-full flex items-start justify-start`}>
                                            <h1 className={`text-sm`}>Other</h1>
                                            <StarIcon color={`#000`} width={15} className="mx-2" />
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div> */}


                        <div className={`w-[95%] h-[1rem] flex items-center justify-around`}>
                            <Checkbox size="small" sx={{
                                color: "#0b8454", '&.Mui-checked': {
                                    color: "#0b8454",
                                },

                            }}
                                onChange={handleAcknowledgement}
                            />
                            <h4 className={`text-xs font-light`}>I understand that I can only register once, and that my voter data cannot be changed once I hit the button below</h4>
                        </div>



                    </div>
                    <section
                        className={`w-[12rem] h-[45px] flex justify-center items-center mt-[2rem]`}
                    >
                        {/* <ConnectButton
                            accountStatus={{
                                smallScreen: "avatar",
                                largeScreen: "full",
                            }}
                            showBalance={{
                                smallScreen: false,
                                largeScreen: false,
                            }}
                            label = {`Register`}
                            
                        /> */}
                        <div className={`w-[15rem] h-10 ${acknowledgement ? "bg-[#0b8454] text-white cursor-pointer" : "bg-[#000] text-white cursor-not-allowed"} rounded-lg flex items-center justify-center`}>
                            <h3>Register</h3>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default Register