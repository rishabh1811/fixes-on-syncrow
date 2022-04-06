import React, { useState, useEffect } from 'react';

function Progress(props) {
  const [w, setW] = useState('w-0');

  useEffect(() => {
    if (props.active === 2) {
      setW('w-1/4');
    } else if (props.active === 3) {
      setW('w-1/2');
    } else if (props.active === 4) {
      setW('w-3/4');
    } else {
      setW('w-0');
    }
  }, [props.active]);
  return (
    <div className='relative top-16'>
      <div className='laptop:w-100 desktop:w-104 laptop:h-7 desktop:h-6 border-dashed border border-slate-500 rounded-3xl mx-auto'>
        <div className='w-full h-full '>
          <div className='grid grid-cols-4 grid-rows-1 laptop:w-98 desktop:w-104'>
            <div className='rounded-full bg-default laptop:w-6 desktop:w-7 laptop:h-6 desktop:h-7 relative -bottom-0'></div>
            <div className='rounded-full bg-default laptop:w-6 desktop:w-7 laptop:h-6 desktop:h-7 relative -bottom-0'></div>
            <div className='rounded-full bg-default laptop:w-6 desktop:w-7 laptop:h-6 desktop:h-7 relative -bottom-0'></div>
            <div className='rounded-full bg-default laptop:w-6 desktop:w-7 laptop:h-6 desktop:h-7 relative -bottom-0'></div>
          </div>
        </div>
        <div
          className={`${w} h-7 -mt-7 left-1 bg-default rounded-3xl relative`} 
        ></div>
      </div>
      <div className='laptop:w-98 desktop:w-104 grid grid-cols-4 grid-rows-1 my-3 laptop:text-base desktop:text-xl font-bold mx-auto'>
        <span className="-ml-10">Type</span>
        <span className="-ml-10">Size</span>
        <span className="-ml-10">Devices</span>
        <span className="-ml-10">Installation</span>
      </div>
    </div>
  );
}

export default Progress;
