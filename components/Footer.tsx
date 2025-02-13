import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-7" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[65vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">React out to me today and let&apos;s discuss how I can help you achieve your goals</p>
                <a href="mailto:devamit342@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col gap-3 justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Amit
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <Link href={profile.link} target="_blank" key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <Image src={profile.img} alt={profile.img} width={20} height={20} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer