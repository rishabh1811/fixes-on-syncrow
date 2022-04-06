import React from "react";
import Header from "../../components/header";

import { motion } from 'framer-motion';

function Page1() {
  return (
    <>
      <Header color="black"></Header>

      <div className="flex mx-8 tablet:mx-16 items-center tablet:items-start gap-0 middle:gap-12 flex-col middle:flex-row">
        <motion.div

          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          className="flex-1  middle:mt-52 mt-44">
          <h1 className="text-4xl tablet:text-6xl middle:text-8xl font-semibold leading-none capitalize desktop:w-3/5">
            The
            <span
              className="text-default text-5xl tablet:text-7xl middle:text-9xl font-normal leading-3"
              style={{ fontFamily: "Guthen Bloots Personal Use" }}
            >
              &nbsp; Future &nbsp;
            </span>
          </h1>
          <h1 className="text-4xl tablet:text-6xl middle:text-8xl font-semibold leading-none capitalize desktop:w-3/5">
            is wireless
          </h1>
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
          className="flex-1 middle:mt-52 mt-10">
          <p className="tablet:w-5/6 w-full text-lg text-black font-normal tablet:text-left text-center">
            Discover a smarter way of energy, device, and operational efficiency
            with Syncrow IoT Solutions.
            <br />
            <br />
            Reduce the complexity and large-scale network executions and make a
            move towards innovation by leveraging the power of IoT solutions.
          </p>
        </motion.div>
      </div>

    </>
  );
}

export default Page1;


