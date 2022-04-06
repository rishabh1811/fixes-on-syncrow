import React from 'react'
import StarterBundle from "./StarterBundle"
import Lottie from "react-lottie";
import circleAnimation from "../pages/lotties/circle.json";


function ProvideConvenience() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <div className="flex flex-col" >
    <div className="-mt-44 extraSmall:-mt-72 small:-mt-8 desktop:-mt-32 -mb-44 container px-4 md:px-24 mx-auto flex middle:flex-row flex-col-reverse">
        <div className="middle:mt-0 -mt-20 extraSmall:-mt-32 desktop:mt-36 flex-1 relative">
            <h1 className="text-2xl middle:text-3xl font-[aftika-bold] capitalize -mb-12 middle:-mb-16 medium:-mb-20 medium:ml-24 middle:ml-20 ml-12">We provide</h1>
            <h1><span className="text-8xl middle:text-9xl medium:text-10xl text-default" style={{ fontFamily: `Guthen Bloots Personal Use` }}>Convenience</span></h1>
            <h1 className="text-2xl middle:text-3xl font-[aftika-bold] capitalize medium:-mt-20 middle:-mt-16 -mt-12 absolute right-0">to your home</h1>
            <div className="flex items-end flex-col">
                <ul>
                    <li className="flex middle:gap-1 gap-4 items-center text-base font-[aftika-bold] tracking-wide middle:leading-7 leading-loose"> <div className="w-3 h-3 mb-1 bg-default rounded-full"></div> Easy Installation</li>
                    <li className="flex  middle:gap-1 gap-4 items-center text-base font-[aftika-bold] tracking-wide middle:leading-7 leading-loose"> <div className="w-3 mb-1 h-3 bg-default rounded-full"></div>Affordable Pricing</li>
                    <li className="flex  middle:gap-1 gap-4 items-center text-base font-[aftika-bold] tracking-wide middle:leading-7 leading-loose"> <div className="w-3 mb-1 h-3 bg-default rounded-full"></div>Free Consultation</li>
                </ul>
                <button className="bg-default rounded-lg text-white font-[aftika-extra-light] tracking-wide text-tiny py-2 middle:px-6 px-10 mt-4">Ask an expert</button>
            </div>
        </div>
        <div className="">
            {/* img */}
            <div className="relative mt-0 middle:-mt-36 medium:-mt-20 medium:-ml-72 middle:-ml-60 -ml-10">
            <div className="tablet:block hidden">
            <Lottie className="absolute top-0 " options={defaultOptions} height={'90vh'} width={'70vw'}/>
            </div>
            <div className="tablet:hidden block">
            <Lottie className=" absolute top-0 " options={defaultOptions} height={'90vh'} width={'100vw'}/>
            </div>
            <img className=" z-10 absolute top-32 h-96 extraSmall:h-102 mediumLarge:h-103 left-12 middle:left-1/3"  src="https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_16_2n_N_Yg_B5k7_37992d9f7e.webp" alt=""/>
            </div>
        </div>
    </div>
    <StarterBundle/>
    </div>
 
  )
}

export default ProvideConvenience








































{/* <div className='lg:block hidden relative'>
<div className='absolute right-0 top-28 z-10'>
  <Lottie options={defaultOptions} height={'90vh'} width={'60vw'} />
</div>
<img
  src={data.page5_cover.data.attributes.url}
  alt=''
  width='25%'
  className='absolute top-36 laptop:right-52 desktop:right-64 z-20'
/>
<div className='laptop:text-lg desktop:text-xl font-bold relative  mediumLarge:-top-10 desktop:top-6 top-20 left-44 '>
  <span
    className='laptop:text-3xl desktop:text-4xl absolute top-12 left-20'
    style={
      data.page5_opener_highlight_line_no == 1
        ? { fontFamily: 'Guthen Bloots Personal Use' }
        : {}
    }
  >
    {data.page5_opener_1}
  </span>
  <br />
  <span
    className='text-default laptop:text-9xl desktop:text-9xl font-normal'
    style={
      data.page5_opener_highlight_line_no == 2
        ? { fontFamily: 'Guthen Bloots Personal Use' }
        : {}
    }
  >
    {data.page5_opener_2}
  </span>
  <br />
  <span
    className='laptop:text-3xl desktop:text-4xl pl-20 absolute laptop:top-32 left-44 desktop:top-32 mt-8'
    style={
      data.page5_opener_highlight_line_no == 3
        ? { fontFamily: 'Guthen Bloots Personal Use' }
        : {}
    }
  >
    {data.page5_opener_3}
  </span>
  <ul className='list-disc pl-72 relative'>
    {data.page5_feature_list.split(',').map((element, index) => {
      return (
        <li className='text-default text-xl ' key={index.toString()}>
          <span className='text-black laptop:text-base desktop:text-xl font-[aftika-bold]'>
            {element}
          </span>
        </li>
      );
    })}
  </ul>
  <br />
  <div className='pl-72'>
    <Link href='/contact'>
      <button className='bg-default w-32 h-8 rounded-md'>
        <span className='text-white laptop:text-sm desktop:text-base font-bold'>
          Ask An Expert
        </span>
      </button>
    </Link>
  </div>
</div>
<div
  className='laptop:h-52 desktop:h-72 relative laptop:-bottom-32 desktop:-bottom-60'
  style={{ background: '#E3E3E3' }}
>
  <img
    src={data.page5_offer_cover.data.attributes.url}
    alt=''
    width='23%'
    className='absolute laptop:bottom-12 desktop:bottom-16 left-72'
  />
  <span className='font-bold laptop:text-4xl desktop:text-5xl absolute laptop:left-1/3 desktop:left-1/3 top-16 leading-none tracking-wide font-[aftika-bold]'>
    {data.page5_offer_title}
  </span>
  <br />
  <br />
  <span className='laptop:text-xl desktop:text-2xl absolute top-24 leading-nones laptop:left-1/3 desktop:left-1/3 font-[aftika-semibold]'>
    {data.page5_offer_subtitle}
  </span>
  <br />

  <div className='grid grid-cols-2 grid-rows-1 absolute top-36 laptop:left-1/3 desktop:left-1/3 gap-4'>
    <Link href='/bundles'>
      <button className='bg-default w-32 h-8 rounded-md'>
        <span className='text-white laptop:text-sm desktop:text-base font-bold'>
          Know More
        </span>
      </button>
    </Link>
    <Link href='/build'>
      <button className='bg-default w-32 h-8 rounded-md'>
        <span className='text-white laptop:text-sm desktop:text-base font-bold'>
          Build Your Own
        </span>
      </button>
    </Link>
  </div>
</div>
</div>

{/* mobile  */}
{/* <div className='lg:hidden'>
<div className='relative p-[2rem] flex justify-center items-center'>
  <div className='-z-10 absolute top-0 left-0 w-[100%] h-[100%]'>
    <Lottie options={defaultOptions} height={'130%'} width={'110%'} />
  </div>
  <img
    className="object-contain w-[80%]"
    src="https://syncrow.s3.ap-south-1.amazonaws.com/Mask_Group_16_2n_N_Yg_B5k7_37992d9f7e.webp"
    alt="..."
  />
</div>
<div className="p-[2rem] flex justify-center items-center flex-col">
  <p className="font-bold text-[1.5rem]">We Provide</p>
  <p
    style={{ fontFamily: `${guthen}` }}
    className="text-[6rem] leading-[4.5rem] lg:text-[7rem] text-blue-700"
  >
    Convenience
  </p>
  <p className="font-bold text-[1.5rem]">To Your Home</p>
</div>
<div className="flex p-[2rem] justify-between items-center">
  <div className="w-[49%] h-[100%]">
    <img
      className="object-contain w-[200%] h-[100%]"
      src="/product-image.webp"
      alt="..."
    />
  </div>
  <div className="w-[48%] h-[100%] flex items-start justify-center flex-col">
    <div className=" my-[.5rem] flex items-center justify-start text-left">
      <div className="w-[.7rem] h-[.7rem] bg-blue-700 rounded-[50%] mr-[1rem]"></div>
      <p className="font-semibold">Easy Installation</p>
    </div>
    <div className=" my-[.5rem] flex items-center justify-start text-left">
      <div className="w-[.7rem] h-[.7rem] bg-blue-700 rounded-[50%] mr-[1rem]"></div>
      <p className="font-semibold">Affordable Pricing</p>
    </div>
    <div className=" my-[.5rem] flex items-center justify-start text-left">
      <div className="w-[.7rem] h-[.7rem] bg-blue-700 rounded-[50%] mr-[1rem]"></div>
      <p className="font-semibold">Free Consultation</p>
    </div>

    <div className="my-[1rem] flex items-center justify-center w-[100%]">
      <button className="text-white bg-blue-700 rounded-md w-[90%] py-[.5rem] px-[.9rem]">
        Ask An Expert
      </button>
    </div>
  </div>
</div>
<div className="p-[2rem] flex-col">
  <div className="w-[100%]">
    <p className="font-bold text-[2.5rem]">Starter Bundle</p>
    <p className="font-[aftika-semibold] text-[1rem] leading-[1rem]">
      For Just AED 2999
    </p>
  </div>
  <div className="flex justify-between mt-[1rem]">
    <button className="text-white font-light bg-blue-700 rounded-md w-[48%] py-[.5rem] px-[.9rem]">
      Know More
    </button>
    <button className="text-white font-light bg-blue-700 rounded-md w-[48%] py-[.5rem] px-[.9rem]">
      Build Your Own
    </button>
  </div>
</div>
</div>  */}