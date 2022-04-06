import React,{useState} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Progress from "../../components/progress";

function Page2({ active, setActive }) {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  return (
    <div className={`h-screen relative ${active === 2 ? "" : "hidden"}`}>
      <Header color="black" />
      <div className="flex justify-center items-center">
        <div className="container px-4 md:px-20 mx-auto my-10">
          <h1
            className="laptop:text-6xl desktop:text-7xl text-5xl mt-20 font-normal text-default  leading-none"
            style={{ fontFamily: "Guthen Bloots Personal Use" }}
          >
            Build Your Own
          </h1>
          <p className="font-[aftika-bold] tracking-wide font-sm">Select Type</p>

          <div className=" desktop:mx-44 laptop:mx-16 mx-0 mt-10">
            <div className="flex tablet:flex-row flex-col gap-10 justify-between">
              {/* one */}
              <div
                className={`${
                  click1 ? "bg-default" : ""
                } border-2 border-default rounded-2xl relative tablet:w-72 w-full tablet:h-32 h-20 flex items-center justify-center hover:bg-default`}
                onMouseOver={() => setHover1(true)}
                onMouseOut={() => setHover1(false)}
                onClick={() => setClick1(true)}
              >
                <div
                  className={`${click1 ? "bg-white" : "bg-default"} ${
                    hover1 ? "bg-white" : "bg-default"
                  }  w-4 h-4 rounded-full absolute top-2 tablet:block hidden left-2`}
                ></div>
                <p
                  className={`${click1 ? "text-white font-[aftika-semibold]" : "text-default"} uppercase ${
                    hover1 ? "text-white" : ""
                  } ${
                    hover1 ? "font-[aftika-semibold]" : "font-[aftika-bold]"
                  } tracking-wide text-lg`}
                  style={{color:hover1?"white":""}}
                >
                 1 bhk
                </p>
              </div>
              {/* one */}
              <div
                className={`${
                  click2 ? "bg-default" : ""
                } border-2 border-default rounded-2xl relative tablet:w-72 w-full tablet:h-32 h-20 flex items-center justify-center hover:bg-default`}
                onMouseOver={() => setHover2(true)}
                onMouseOut={() => setHover2(false)}
                onClick={() => setClick2(true)}
              >
                <div
                  className={`${click2 ? "bg-white" : ""} ${
                    hover2 ? "bg-white" : "bg-default"
                  } bg-default w-4 h-4  tablet:block hidden rounded-full absolute top-2 left-2`}
                ></div>
                <p
                  className={`${click2 ? "text-white font-[aftika-semibold]" : "text-default"} uppercase ${
                    hover2 ? "text-white" : ""
                  } ${
                    hover2 ? "font-[aftika-semibold]" : "font-[aftika-bold]"
                  } tracking-wide text-lg`}
                  style={{color:hover2?"white":""}}
                >
                2 bhk
                </p>
              </div>
              {/* two */}
              <div
                className={`${
                  click3 ? "bg-default" : ""
                } border-2 border-default rounded-2xl relative tablet:w-72 w-full tablet:h-32 h-20 flex items-center justify-center hover:bg-default `}
                onMouseOver={() => setHover3(true)}
                onMouseOut={() => setHover3(false)}
                onClick={() => setClick3(true)}
              >
                <div
                  className={`${click3 ? "bg-white" : ""} ${
                    hover3 ? "bg-white" : "bg-default"
                  } bg-default w-4 h-4 rounded-full tablet:block hidden absolute top-2 left-2`}
                ></div>
                <p
                  className={`uppercase ${
                    hover3||click3 ? "text-white font-[aftika-semibold]" : "font-[aftika-bold] text-default"
                  } tracking-wide text-lg `}
                  style={{color:hover3?"white":""}}
                >
                  3 bhk
                </p>
              </div>
            </div>


          <div className="laptop:flex hidden items-center justify-around gap-20">

            <div className="relative bottom-8">
              <Progress active={active} />
            </div>

            <div className="mb-10 mt-16">
            <button
                className="mr-10 z-10 relative text-white laptop:text-tiny desktop:text-xl laptop:w-36 laptop:h-8 desktop:h-10 rounded-lg uppercase font-[aftika-light]"
                style={{ background: "#747474" }}
                onClick={() => setActive(active - 1)}
              >
                Back
              </button>
              <button
                className="first-letter:z-10 relative text-white laptop:text-tiny desktop:text-xl laptop:w-36 laptop:h-8 desktop:h-10 rounded-lg bg-default uppercase font-[aftika-light]"
                onClick={() => setActive(active + 1)}
              >
                Next
              </button>

          
            </div>
          </div>
          <div className="laptop:hidden flex mt-6">
          <button
                className="mr-10 z-10 relative text-white laptop:text-tiny desktop:text-xl w-36 h-8 desktop:h-10 rounded-lg uppercase font-[aftika-light]"
                style={{ background: "#747474" }}
                onClick={() => setActive(active + 1)}
              >
                Back
              </button>
              <button
                className="first-letter:z-10 relative text-white laptop:text-tiny desktop:text-xl w-36 h-8 desktop:h-10 rounded-lg bg-default uppercase font-[aftika-light]"
                onClick={() => setActive(active + 1)}
              >
                Next
              </button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page2;

{
  /* {property_sizes.map((types, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      property_sizes_toggle[index] ? 'bg-default' : 'bg-white'
                    } laptop:w-72 desktop:w-96 desktop:rounded-3xl laptop:rounded-2xl relative border-2 border-default`}
                    onClick={() => {
                      handleSizeToggle(index);
                    }}
                  >
                    <ul className='list-disc pl-7'>
                      <li
                        className={`${
                          !property_sizes_toggle[index]
                            ? 'text-default'
                            : 'text-white'
                        } laptop:text-3xl desktop:text-4xl absolute -top-4 laptop:left-10 desktop:left-10`}
                      >
                        <span
                          className={`${
                            !property_sizes_toggle[index]
                              ? 'text-default'
                              : 'text-white'
                          } laptop:text-2xl desktop:text-3xl  absolute desktop:top-24 laptop:top-20 desktop:left-0 laptop:-left-8 w-72 font-semibold flex justify-center`}
                        >
                          {types.attributes.name.trim()}
                        </span>
                      </li>
                    </ul>
                  </div>
                );
              })} */
}
