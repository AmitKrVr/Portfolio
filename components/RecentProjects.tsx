'use client'

import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa6"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import Image from "next/image";

type ImgList = {
    id: number;
    imgUrl: string;
    title: string;
};
type IconList = {
    id: number
    name: string
    image: string
}

type Project = {
    id: number;
    link: string;
    img: string;
    youtubeLink?: string;
    title: string;
    des: string;
    iconLists: IconList[];
    imgLists: ImgList[];
};


const RecentProjects = () => {
    const ref = useRef<HTMLDivElement>(null)

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCardDetails, setSelectedCardDetails] = useState<Project | null>(null);

    const handleCardClick = (item: Project) => {
        setIsPopupOpen(true);
        setSelectedCardDetails(item); // Pass the details of the clicked card
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
        setSelectedCardDetails(null); // Clear selected card details on close
    };


    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of {" "}
                <span className="text-purple">recents projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-evenly p-4 gap-y-8">
                {projects.map((item) => (

                    <div ref={ref} onClick={() => handleCardClick(item)} key={item.id} className="h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw] sm:w-[470px] md:w-[570px]">
                        <PinContainer title={item.link} href={item.link}>
                            <div className="relative flex items-center justify-center w-[80vw] sm:w-[470px] md:w-[500px] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
                                {/* <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div> */}
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    height={500}
                                    width={500}
                                    className="z-10 absolute bottom-0"
                                />
                            </div>
                            <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                                {item.title}
                            </h1>

                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    <AnimatedTooltip className="lg:w-10 lg:h-10 w-8 h-8 p-2" items={item?.iconLists || []} />
                                </div>

                                <div className="flex items-center justify-center">
                                    {item.link.length > 0 &&
                                        <>
                                            <a href={item.link} target="_blank" className={`flex text-sm md:text-xs lg:text-xl text-purple`}>Check Live Site</a>
                                            <FaLocationArrow className="ms-3" color="#cbacf9" />
                                        </>
                                    }
                                </div>
                            </div>
                        </PinContainer>
                    </div>

                ))}
                {isPopupOpen && (
                    <motion.div
                        onClick={() => handlePopupClose()}
                        className="fixed top-0 left-0 z-50 h-[100vh] w-[100vw] flex justify-center items-center bg-black bg-opacity-55"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <div onClick={(e) => e.stopPropagation()} className="relative h-[70vh] w-[98vw] md:w-[80vw] bg-black-100 border-2 border-white/[0.3] flex flex-col items-center rounded-lg overflow-y-scroll py-8 md:py-10 px-4 md:px-10">

                            <div className="fixed top-[90px] right-3 md:right-10 lg:right-40 " onClick={() => handlePopupClose()}>
                                <svg
                                    width="30px"
                                    height="30px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="cursor-pointer"
                                >
                                    <path
                                        fill="white"
                                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                                    />
                                </svg>
                            </div>

                            <div className="z-50 flex flex-col gap-10">
                                <h2 className="font-bold text-3xl md:text-4xl text-center  sm:underline sm:underline-offset-8">{selectedCardDetails?.title}</h2>

                                <p className="lg:text-xl lg:font-normal font-light text-sm text-justify md:text-left">{selectedCardDetails?.des}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <AnimatedTooltip className="lg:w-12 lg:h-12 w-10 h-10 p-2.5" items={selectedCardDetails?.iconLists || []} />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        {selectedCardDetails?.link && (
                                            <>
                                                <a href={selectedCardDetails?.link} target="_blank" className="flex text-sm md:text-xs lg:text-xl text-purple">Check Live Site</a>
                                                <FaLocationArrow className="ms-3" color="#cbacf9" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-y-8">
                                    {selectedCardDetails?.youtubeLink &&
                                        <div className="relative h-[15rem] sm:h-[23rem] md:h-[30rem] lg:h-[30rem] w-full">
                                            {/* <video width="800" height="600" controls>
                                    <source src="/horizon-banking.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}

                                            {/* className="w-[350px] h-[280px] sm:w-[580px] sm:h-[350px] md:w-[770px] md:h-[500px]"  */}


                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={selectedCardDetails?.youtubeLink}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen>
                                            </iframe>



                                        </div>
                                    }
                                    {selectedCardDetails?.imgLists.map((list) => (
                                        <div key={list.id} className="flex flex-col gap-2 border pt-3 overflow-hidden rounded-xl border-white/[0.5]">
                                            <h2 className="font-bold text-xl md:text-2xl text-[#eaeaea] text-center">{list.title}</h2>
                                            <Image width={770} height={500} src={list?.imgUrl} alt="img" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
                }
            </div >
        </div >
    )
}
export default RecentProjects