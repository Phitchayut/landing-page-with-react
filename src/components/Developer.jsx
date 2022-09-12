import React from "react";
import developer from '../assets/terminal.png'

const Developer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1240px] mx-auto md:flex px-6 py-16">
        <div className="flex flex-col justify-center mb-5">
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="blue">documentation</span>, the
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full">
            <img className="max-w-[500px] bg-cyan-500 shadow-lg shadow-cyan-500/50" src={developer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Developer;
