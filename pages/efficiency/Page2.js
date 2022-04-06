import React from 'react'
import {motion} from "framer-motion"

function Page2() {
  return (
    <div className='flex middle:flex-row flex-col-reverse middle:mt-60 mt-10 tablet:mx-16 mx-8 items-center'>
      <div className="flex-1 middle:mt-0 mt-6">
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="middle:text-left text-center middle:block hidden"><span 
              className="text-default text-6xl  font-normal leading-3"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>Control</span></motion.h1>
              <h1 className="middle:hidden block text-default text-6xl text-center leading-10">Control</h1>
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="text-4xl capitalize font-semibold middle:text-left text-center">is in your hand</motion.h1>
        <ul className="list-disc ml-6 mt-4 marker:text-default">
          <motion.li  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="laptop:mb-0 mb-4  font-[aftika-light] tracking-wide leading-7 text-base">Monitor your electrical appliances over your smartphone from anywhere in the world.</motion.li>
          <motion.li  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="laptop:mb-0 mb-4  font-[aftika-light] tracking-wide leading-7 text-base">The added convenience of our Syncrow Smart Home Automation Systems helps live life better and focus on priorities.</motion.li>
          <motion.li  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="laptop:mb-0 mb-4  font-[aftika-light] tracking-wide leading-7 text-base">Curtains for energy savings</motion.li>
          <motion.li  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="laptop:mb-0 mb-4  font-[aftika-light] tracking-wide leading-7 text-base">Temperature control</motion.li>
        </ul>
      </div>
      <div className="flex-1">
        <img src="https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_25_Bx_W_Hg88pe_ON_e9f17af887.webp" height="80%" width="80%" alt="" />
      </div>
    </div>
  )
}

export default Page2


