import React from "react";
import Link from "next/link";
import Lottie from "react-lottie";
import contactAnimation from "../pages/lotties/1.json";
import contactExpertAnimation from "../pages/lotties/ask-your-expert.json"

function contactButtons(props) {
    
    const contactExpertOptions = {
        loop: true,
        autoplay: true,
        animationData: contactExpertAnimation,
        renderedSettings: {
            // preserveAspectRatio:'xMidYMid slice'
        },
    };

    return (
        <div className="relative laptop:text-base desktop:text-lg font-normal -mt-10 tablet:mt-0 tablet:-ml-10">
            <div className="flex items-center mb-10 mt-6">
                <button>
                    <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                    />
                </button>{" "}
                <Link href="/contact">
                    <span className="tablet:absolute tablet:ml-5 top-2 left-16 cursor-pointer text-xs tablet:text-base tracking-wide">
                        Ask our Expert
                    </span>
                </Link>
            </div>
            <div className="flex items-center -mt-8">
                <button>
                
                    <Lottie
                        options={contactExpertOptions}
                        width={"40px"}
                        height={"40px"}
                    />
                </button>
                <span className="tablet:absolute tablet:ml-5 left-16">
                    <Link href="/bundles">
                        <span className="underline text-blue-500 cursor-pointer text-base tracking-wide">
                            Choose your bundle
                        </span>
                    </Link>{" "}
                    or{" "}
                    <Link href="/build">
                        <span className="underline text-blue-500 cursor-pointer text-base tracking-wide">
                            Design your own
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default contactButtons;