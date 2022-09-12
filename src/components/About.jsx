import React from "react";
import { cardData } from "./data";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="w-full bg-black text-center  text-white">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">A Growing Protocal Ecosystem</h1>
          <p className="py-4 text-xl">
            The Defi protocal system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          {/* card container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardData.map((item, index) => (
              <>
                <motion.div 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="cursor-pointer border flex flex-col border text-left rounded-2xl py-12 px-8">
                  <ul className="">
                    <li className="bg-[#00d8ff] inline-flex p-3 rounded-full">{item.icons}</li>
                    <h2 className="text-xl font-bold py-4">{item.heading}</h2>
                    <p>{item.text}</p>
                  </ul>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
