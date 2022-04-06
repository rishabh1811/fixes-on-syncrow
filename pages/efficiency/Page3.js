import React from 'react'
import {motion} from "framer-motion"

function Page3() {
  return (
    <div className="flex tablet:mt-0 -mt-36 ">
      <div className="flex-1 flex items-center justify-end ">
        <img src="https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_23_Meg_O2n_EM_3q_67b24b2cf7.webp" className="w-11/12 middle:w-9/12" alt="" />
      </div>
      <div className="flex-1 mt-[480px]  tablet:-ml-28 -ml-16 middle:ml-0 middle:mt-56">
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  ><span 
              className="text-default text-5xl tablet:text-6xl font-normal leading-tight"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>Energy</span></motion.h1>
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="text-xl tablet:text-3xl text-black font-semibold leading-8 laptop:ml-0 -ml-10">Monitoring and Planning</motion.h1>
        <motion.p  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="tablet:w-10/12  text-black tablet:mt-8 mt-4  font-[aftika-light] tracking-wide leading-7 text-base middle:text-left text-center laptop:ml-0 -ml-16 w-full">Understand how you consume energy at every level. From appliances and rooms to the complete home. Optimize these learnings to set your energy consumption targets and get alerts and prompts to save up on energy costs.</motion.p>
      </div>
    </div>
  )
}

export default Page3

