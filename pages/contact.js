/* eslint-disable @next/next/no-img-element */
import Header from '../components/header';
import Form from '../components/form';
import FormNew from "../components/FormNew";
import Footer from '../components/footer';
import { AiOutlineMail } from "react-icons/ai"
import { FiPhoneCall } from "react-icons/fi"
import { MdOutlineLocationOn } from "react-icons/md"
import { HiOutlineLocationMarker } from "react-icons/hi"

export default function Contact() {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-screen relative medium:block hidden'>
        <Header color='black' />
        <img
          src='https://ik.imagekit.io/jason7531/syncrow/Mask_Group_52_A0jrWxgPslD.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643466245971'
          alt=''
          className='absolute top-24 left-20 desktop:w-110 laptop:w-104 desktop:h-103 laptop:h-100 object-cover'
        />
        {/* <span className='absolute left-20 desktop:bottom-96 laptop:bottom-52 desktop:text-2xl laptop:text-xl font-bold'>
          Let&apos;s Connect
        </span>
        <img
          src='https://ik.imagekit.io/jason7531/syncrow/Contact_info_VToLGOKl4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643466935059'
          alt=''
          className='absolute left-20 desktop:bottom-60 laptop:bottom-20'
        /> */}
        <Form title='Send us a message' amount={0} item={[]} type='contact' />

        <div className='absolute left-20 desktop:bottom-0 laptop:bottom-0 desktop:text-2xl laptop:text-xl font-bold'>
          <p> Let&apos;s Connect</p>
          <a href="mailto:contact@syncrow.ae" className="flex items-center text-base">
            <AiOutlineMail className='mr-4' /> <p> contact@syncrow.ae </p>
          </a>
          <div href="" className="flex items-center text-base">
            <FiPhoneCall className='mr-4' /> <p> 055 890 2791 </p>
          </div>
          <div href="" className="flex items-center text-base">
            <MdOutlineLocationOn className='mr-4' /> <p> 1907, Grosvenor Business Bay Tower. </p>
          </div>
        </div>
      </div>

      {/* mobile responsiveness */}
      <div className='medium:hidden flex flex-col'>
        <Header color='black' />
        <div className="tablet:mx-20 mx-8 mt-28">
          <FormNew />
        </div>
        <div className="tablet:mx-20 mx-8 mt-6  flex-col flex gap-10 items-center">
          <img src="https://ik.imagekit.io/jason7531/syncrow/Mask_Group_52_A0jrWxgPslD.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643466245971" alt="" />
          <div>
            <h1 className="text-2xl mb-4">Lets Connect</h1>
            {/* <img src="https://ik.imagekit.io/jason7531/syncrow/Contact_info_VToLGOKl4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643466935059" alt=""/> */}

            <div className=''>
              <a href="mailto:contact@syncrow.ae" className="flex items-center text-base">
                <AiOutlineMail className='mr-4' /> <p> contact@syncrow.ae </p>
              </a>
              <div href="" className="flex items-center text-base">
                <FiPhoneCall className='mr-4' /> <p> 055 890 2791 </p>
              </div>
              <div href="" className="flex items-center text-base">
                <HiOutlineLocationMarker className='mr-4' /> <p> 1907, Grosvenor Business Bay Tower. </p>
              </div>
            </div>


          </div>
        </div>

        <div className='mt-20'>
          <Footer />
        </div>
      </div>
      {/* mobile responsiveness */}
      <div className='medium:block hidden'>
        <Footer />
      </div>
    </div>
  );
}
