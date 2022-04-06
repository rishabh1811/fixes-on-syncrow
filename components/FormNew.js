import React from "react"

const FormNew = () => {
    return (
        <div style={{ background: "#F5F5F5" }} className="px-8 py-8">
            <div className="border-b-2 border-blue-300">
                <p className="uppercase font-[aftika-bold] text-black text-base">Details</p>
            </div>
            <div className="flex flex-col mt-6 mb-2">
                <label className="text-black font-[aftika-light] text-tiny mb-1">First & Last Name <span className="text-red-500 -ml-1">*</span></label>
                <input type="text" className="outline-none rounded-md py-1 text-black pl-1"/>
            </div>
            <div className="flex gap-4 mb-2 tablet:flex-row flex-col">
            <div className="flex flex-col flex-1">
                <label className="text-black font-[aftika-light] text-tiny mb-1">Phone Number <span className="text-red-500 -ml-1">*</span></label>
                <input type="text"  className="outline-none rounded-md py-1 text-black pl-1"/>
            </div>
            <div className="flex flex-col flex-1">
                <label className="text-black font-[aftika-light] text-tiny mb-1">Email Address <span className="text-red-500 -ml-1">*</span></label>
                <input type="text" className="outline-none rounded-md py-1 text-black pl-1"/>
            </div>
            </div>
            <div className="flex flex-col mb-2">
                <label className="text-black font-[aftika-light] text-tiny mb-1">Company Name (optional)</label>
                <input type="text"  className="rounded-md py-1 text-black outline-none pl-1 "/>
            </div>
            <div className="flex flex-col mb-10">
                <label className="text-black font-[aftika-light] text-tiny mb-1">Message <span className="text-red-500 -ml-1">*</span></label>
                <textarea placeholder="Your message here..." className="rounded-md py-1 text-black outline-none pt-1 pl-1"></textarea>
                <p className="text-black font-[aftika-light] mt-1"><span className="text-red-500 mr-1">*</span>Fields required</p>
            </div>
            <div className="flex justify-between gap-4">
            <button className="bg-default uppercase text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg" type="submit">
          Submit
        </button>
        <button className="bg-default uppercase text-white desktop:w-48 w-36 desktop:h-10 h-8 rounded-lg" type="submit">
          Reset
        </button>
            </div>
        </div>
    )
}

export default FormNew;