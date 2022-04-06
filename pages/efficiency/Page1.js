import React from "react";
import Header from "../../components/header";
import {motion} from "framer-motion"

function Page1() {
  return (
      <div>
    <div
      className="h-screen bg-cover bg-center tablet:px-8 middle:block hidden"
      style={{
        backgroundImage:
          "url('https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_21_2d32bf4cc6.png')",
      }}
    >
      <Header color="black"/>
      <div className="flex">
        <div className="pt-52 flex-1 medium:mx-16 mx-4">
        <div className="flex flex-col items-start">
          <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  >
            <span 
              className="text-black text-7xl  font-normal"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>Move towards</span>
          </motion.h1>
          <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  >
            <span 
              className="text-default text-7xl  font-normal leading-10"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>Sustainable Living</span>
          </motion.h1>
          </div>
        </div>
        <div className="pt-52 flex-1">
        <div className=" flex items-end justify-end">
          <motion.p  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="w-3/5  font-[aftika-light] tracking-wide leading-7 text-base text-black mr-4">
            Being energy efficient isn’t just a quality-of-life upgrade. It is a
            smart move toward reducing your carbon footprint and energy bills.
            <br />
            <br />
            Syncrow’s IoT solutions allow you to do just that by giving you
            comfort, convenience, and energy efficiency, in the palm of your
            hand.
          </motion.p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center medium:mt-80 mt-44">
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  ><span 
              className="text-black text-7xl  font-normal leading-tight"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>Take control of your</span></motion.h1>
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  ><span 
              className="text-default text-7xl  font-normal leading-tight"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>energy usage today</span></motion.h1>
      </div>
    </div>
{/* mobile */}
    <div className="middle:hidden h-96 object-fill block bg-cover bg-center " style={{
        backgroundImage:
          "url('https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_21_2d32bf4cc6.png')",
      }}>
      
     <Header />
    </div>
    <div className="flex flex-col items-center justify-center middle:hidden">
    <h1 className="text-5xl w-52 text-center -mt-16 tablet:mt-0">Move towards</h1>
     <p className=" font-[aftika-light] tracking-wide leading-7 text-base text-black w-4/5 tablet:w-3/6 text-center mt-8"> Being energy efficient isn’t just a quality-of-life upgrade. It is a
            smart move toward reducing your carbon footprint and energy bills.
            <br />
            <br />
            Syncrow’s IoT solutions allow you to do just that by giving you
            comfort, convenience, and energy efficiency, in the palm of your
            hand.</p>
    </div>
    <div className="mx-8 tablet:mx-16 flex flex-col items-center justify-center middle:hidden mt-10">
        <h1 className="text-5xl tablet:text-left text-center">Take control of your</h1>
        <h1 className="text-5xl tablet:flex text-blue-700 text-center">energy usage today</h1>
      </div>
    {/* mobile */}
    </div>
  );
}

export default Page1;
