import React from 'react'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Progress from "../../components/progress"
import FormNew from "../../components/FormNew"

function Page4({active, setActive}) {
  return (
    <div className={`relative ${active === 4 ? '' : 'hidden'} `}>
    <Header color='black' />

    <div className='flex justify-center items-center  middle:mt-24'>
      <div className='container px-4 md:px-20 mx-auto  flex laptop:flex-row laptop:gap-0 gap-10 flex-col middle:my-10 mt-36 mb-16' >
       
      <div className="flex-1 items-center flex flex-col justify-center laptop:-ml-20">
        <h1 className="laptop:text-6xl text-5xl desktop:text-7xl font-normal text-default w-5/6 tracking-wide capitalize text-center"
            style={{ fontFamily: "Guthen Bloots Personal Use" }}>Our team of experts will get in touch with you soon</h1>
        <div className="laptop:block hidden">
        <Progress active={active} />
        </div>
      </div>
      <div className="flex-1 laptop:ml-20">
        <FormNew/>
      </div>
   
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default Page4

// <button
// className='text-white laptop:text-base desktop:text-xl laptop:w-36 laptop:h-8 desktop:h-10 rounded-lg absolute laptop:bottom-52 desktop:bottom-72 left-20 '
// style={{ background: '#747474' }}
// onClick={() => setActive(active - 1)}
// >
// Back
// </button>

// <div className='relative right-72 top-36'>
// <Progress active={active} />
// </div>