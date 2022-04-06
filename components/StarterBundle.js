import React from 'react'

function StarterBundle() {
  return (
    <div>
    <div className=" middle:block hidden mt-52 middle:mt-20 desktop:-mt-48 -mb-44 mediumLarge:h-72 h-52 relative" style={{ background: '#E3E3E3' }}>
        <div className=" absolute bottom-6 left-28">
            {/* img */}
            <img src="https://syncrow.s3.ap-south-1.amazonaws.com/Image_5_QL_1l_V6_U_Gwc_A_145f2c41f7.webp" className="h-80" alt="" />
        </div>
        <div className="absolute left-80 pl-4 flex border-2 justify-end h-44 flex-col">
            <h1  className="text-4xl font-[aftika-bold] leading-none">Starter Bundle</h1>
            <h1 className="text-xl font-[aftika-semibold] ">For Just AED 2999</h1>
            <div>
            <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 middle:px-6 px-10 mt-4 mr-4">Know More</button>
            <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 middle:px-6 px-10 mt-4">Build your own</button>
            </div>
        </div>
   </div>
    <div className="middle:hidden block small:mb-0 -mb-40">
      <div className="ml-6">
      <img src="https://syncrow.s3.ap-south-1.amazonaws.com/Image_5_QL_1l_V6_U_Gwc_A_145f2c41f7.webp" className="extraSmall:h-60 h-48 " alt="" />
      </div>
      <div className="mt-10 px-8">
      <h1  className="text-4xl font-[aftika-bold] leading-none tracking-widest">Starter Bundle</h1>
            <h1 className="middle:text-xl font-[aftika-semibold] tracking-wide text-lg">For Just AED 2999</h1>
            <div>
            <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 px-4 mt-4 mr-4">Know More</button>
            <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 px-4 mt-4">Build your own</button>
            
      </div>
    </div>
   </div>
   </div>
 

  );
}

export default StarterBundle;