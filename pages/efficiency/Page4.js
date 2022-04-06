import React from "react";
import Lottie from "react-lottie";
import chartAnimation from "../lotties/chart.json";
import {motion} from "framer-motion"
const chartOptions = {
  loop: true,
  autoplay: true,
  animationData: chartAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Page4() {
  return (
    <div className="flex tablet:mx-16 mx-8 items-center my-10 middle:flex-row flex-col-reverse">
      <div className="flex-1 hidden middle:block">
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}  >
          <span 
              className="text-default text-7xl  font-normal leading-3"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}>Understand</span>
        </motion.h1>
        <motion.h1  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="text-3xl font-semibold">Your Usage</motion.h1>
        <motion.p  initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}   className="mt-6 w-4/5  font-[aftika-light] tracking-wide leading-7 text-base text-black">
          Gain insights into your daily behavior and routine.
          <br />
          <br />
          The Syncrow Smart Home Automation System understands your usage
          patterns to help you schedule your appliances and switches according
          to your schedule. Also, enjoy personalized scene creations which help
          you become more energy-efficient and help you avoid electricity
          wastage.
        </motion.p>
      </div>
      {/* mobile */}
      <div className="middle:hidden flex justify-center items-center flex-col">
      <h1
              className="text-default text-5xl tablet:text-7xl  font-normal leading-10">Understand
        </h1>
        <h1 className="text-4xl font-semibold mt-2">Your Usage</h1>
        <p className="mt-6 w-4/5  font-[aftika-light] tracking-wide leading-7 text-base text-black text-center">
          Gain insights into your daily behavior and routine.
          <br />
          <br />
          The Syncrow Smart Home Automation System understands your usage
          patterns to help you schedule your appliances and switches according
          to your schedule. Also, enjoy personalized scene creations which help
          you become more energy-efficient and help you avoid electricity
          wastage.
        </p>
      </div>
      {/* mobile */}
      <div className="flex-1">
        <Lottie options={chartOptions} />
      </div>
    </div>
  );
}

export default Page4;

