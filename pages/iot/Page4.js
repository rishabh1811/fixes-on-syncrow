import React from 'react'
import Link from "next/link";
import { motion } from 'framer-motion';

function Page4() {
    return (
        <div className="tablet:mx-16 my-20">
            <div className="mx-8 flex middle:items-start items-center middle:flex-row middle:gap-0 gap-10 flex-col">
                <motion.div

                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className="flex-1 flex items-center flex-col mt-32 z-20 ">
                        <div className='hidden md:block'>
                            <h1 className="text-3xl font-[aftika-semibold] mb-12 ml-20">Smart</h1>
                            <h1><span
                            className='text-default text-10xl  desktop:text-11xl font-normal leading-3'
                            style={{ fontFamily: `Guthen Bloots Personal Use` }}>
                            Residential
                            </span></h1>
                            <h1 className="text-4xl font-[aftika-semibold] ml-[252px]">Solutions</h1>
                        </div>
                        <div className='md:hidden'>
                            <h1 className="text-3xl font-[aftika-bold] font-bold mb-8 ml-4">Smart</h1>
                            <h1><span
                                className='text-default text-8xl font-normal leading-3'
                                style={{ fontFamily: `Guthen Bloots Personal Use` }}>Residential</span></h1>
                            <h1 className="text-4xl  font-semibold ml-20 mt-2">Solutions</h1>
                        </div>
                    <Link href={"/apartment"}>
                        <button className="text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10" >Know More</button>
                    </Link>
                </motion.div>
                <motion.div

                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className="flex-1 flex justify-center middle:justify-end">
                    <p className="text-lg text-black w-5/6 tablet:text-left  tracking-wide text-center">We are developing the cities of tomorrow at Syncrow.
                        <br /><br />
                        Our range of solutions provides comprehensive quality of life improvements for lifestyle and growth. With our systems, public and private sector planners can utilize their resources more efficiently and create a sustainable Eden by solving major community challenges.</p>
                </motion.div>
            </div>
            <div
                className="-mt-0 laptop:-mt-10 middle:-mt-20 z-0">
                <img src="https://syncrow.s3.ap-south-1.amazonaws.com/5g_communication_technology_internet_network_1_va5_Kwby9_E_8454645332.webp" alt="" width="100%" />
            </div>
        </div>
    )
}

export default Page4


