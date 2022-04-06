import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'

function Page3() {
  return (
    <div className="relative mb-32">
      {/* responsive */}
      <motion.div

        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        className="flex items-center justify-center laptop:hidden ">
        <div className="">
          <h1 className="text-3xl font-[aftika-bold] font-bold mb-8 ml-4">Smart</h1>
          <h1><span
            className='text-default text-8xl font-normal leading-3'
            style={{ fontFamily: `Guthen Bloots Personal Use` }}>Industry</span></h1>
          <h1 className="text-4xl  font-semibold ml-20 mt-2">Solutions</h1>
        </div>
      </motion.div>
      {/* responsive */}
      <div className="mx-8 tablet:mx-16 my-10 flex justify-center laptop:flex-row flex-col-reverse laptop:gap-14 gap-6">
        <motion.div

          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          className="flex-initial laptop:w-1/3 w-full">
          <p className="text-lg font-semibold text-black laptop:mt-16 mt-0 tablet:text-left tracking-wide text-center">Industries are quickly adopting technology to evolve with the dynamic times.
            <br /><br />
            And you can do just that with Syncrow Solutions. Our solutions allow you to leverage the power of smart asset monitoring and build scalable platforms and processes to convert your industry into a smart industry.
            <br /><br />
            IoT has become essential for business success, only the right solution can radically change the face of your business operations.</p>
        </motion.div>
        <div

          className="flex-1 flex items-center justify-center">
          <img src="/smart.png" alt="" width="100%" height="100%" className="desktop:w-4/5" />
        </div>


      </div>
      <motion.div

        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        className="mx-8 tablet:mx-16 absolute -bottom-20 right-24 laptop:block hidden">
        <h1 className="text-3xl font-[aftika-semibold] mb-12 ml-16">Smart</h1>
        <h1><span
          className='text-default text-10xl  desktop:text-11xl font-normal leading-3'
          style={{ fontFamily: `Guthen Bloots Personal Use` }}>
          Industry
        </span></h1>
        <h1 className="text-4xl font-[aftika-semibold] ml-44">Solutions</h1>
        <Link href={"/iot/industry"}>
          <button className="text-white bg-default w-44 laptop:text-lg desktop:text-xl rounded-md py-2 mt-10">Know More</button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Page3

