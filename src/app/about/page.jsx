"use client";

import { motion, useInView, useScroll } from "framer-motion"
import Image from "next/image";
import React, { useRef } from "react"
import Brain from "../components/brain";


const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}>
            {/* container  */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* text section */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex-col flex gap-24
                md:gap-32 lg:gap-48 xl:gap-64">
                    {/* bio here  */}
                    <div className=" flex flex-col gap-12 justify-center">
                        {/* image here  */}
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/about.png"
                            alt="about"
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* title here  */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* summary  */}
                        <p className="text-lg">
                            Highly motivated and creative individual seeking an entry-level
                            position in the field of Digital marketing. Passionate about
                            utilizing digital platforms to drive brand awareness and
                            engage with target audiences. Eager to apply my knowledge,
                            skills, and enthusiasm to contribute to the growth of an
                            organization
                        </p>
                        {/* quote here */}
                        <span className="italic">“The best marketing doesn't feel like marketing.”
                        </span>

                        {/* signature here */}
                        <div className="self-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="215" height="74" viewBox="0 0 215 74" fill="none">
                                <path d="M5.25861 18.6934C0.935861 21.1142 1.6788 26.0779 3.1475 30.249C7.35551 42.1997 20.9229 47.3846 31.1475 52.9712C33.6567 54.3422 47.7952 62.3287 41.9253 67.3601C33.2976 74.7552 14.5011 64.2652 6.25861 60.6934" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M26.2586 18.6934C21.4997 17.8282 18.6875 14.6934 13.7031 14.6934C10.9469 14.6934 4.25861 15.2705 4.25861 18.6934" stroke="black" stroke-width="3" stroke-linecap="round" />
                                <path d="M45.2586 43.6934C46.2241 50.4518 46.2357 49.0949 45.4808 42.8045C44.4502 34.2158 58.6238 43.7514 60.8697 47.0268C65.2448 53.4071 59.8153 43.2712 58.9808 40.5823C57.5577 35.9967 71.8384 41.6683 73.5919 42.6934C75.4034 43.7524 79.0565 50.5823 81.0364 50.5823C81.2463 50.5823 81.2199 39.8433 82.9253 38.1379C86.2775 34.7857 90.8167 32.6934 95.5364 32.6934C98.1012 32.6934 102.607 31.4698 98.1475 33.5823C96.5365 34.3454 85.1627 39.7749 85.2586 41.6934C85.4154 44.8289 95.9372 52.1317 97.0919 48.8601C98.7615 44.1296 93.8317 39.7535 101.259 43.8045C104.667 45.6634 108.152 50.4291 110.259 44.6934C111.85 40.3609 111.38 39.668 116.259 37.6934C118.551 36.7656 121.599 35.1379 124.147 35.1379C127.298 35.1379 118.109 36.975 115.203 38.1934C109.941 40.4002 116.357 50.6857 119.814 47.8045C121.271 46.5901 120.429 44.3209 121.481 43.1379C124.103 40.1884 130.914 49.4182 131.592 50.4712C134.338 54.7357 142.223 65.5286 141.203 71.1379C140.294 76.1355 123.332 65.8168 121.481 63.6934C115.745 57.1139 142.433 44.6219 140.814 43.1379C138.015 40.5722 131.335 41.5398 128.092 41.8601C125.369 42.129 118.45 41.5048 120.092 43.6934C121.083 45.0153 128.219 45.0744 129.425 45.249C135.624 46.1462 141.723 47.6215 147.925 48.4712C149 48.6184 152.524 49.3586 153.259 48.0268C157.789 39.816 141.953 37.0245 142.481 33.8601C142.88 31.4635 160.45 36.288 162.536 37.1379C167.094 38.9947 162.303 41.5705 165.37 42.9157C170.795 45.2951 175.137 44.728 176.592 38.249C178.085 31.5976 175.452 23.4622 173.147 17.3601C172.613 15.9452 163.609 1.29129 163.481 2.02677C161.178 15.2708 176.584 29.7754 183.314 39.5823C188.943 47.7837 183.3 41.6909 182.147 36.8045C179.683 26.36 202.7 39.7935 205.314 40.4712C209.067 41.4441 213.259 42.1319 213.259 37.6934" stroke="black" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>
                        {/* svg animation here */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* skills section here  */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef} >
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>

                        {/* skills list here  */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SMO
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SMM
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                META ADS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SEO
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PPC
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                GOOGLE ADS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CONTENT MARKETING
                            </div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* experience section here  */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Salesperson (FullTime)
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        SalesPerson.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Oct 2023 - Apr 2024
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        EASY BUY
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Digital Marketing Intern
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        Social Media Optimization: Implemented social media
                                        optimization (SMO) strategies for DuckSoup Visas, increasing
                                        brand visibility and engagement across multiple platforms.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        JULY- AUGUST 2024{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        ESEARCH ADVISORS
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Digital Marketing {" "}
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I provided web solutions, applying a range of technologies
                                        to address client requirements.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        SEP - PRESENT 2024{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        REGAMI SOLUTIONS
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* svg section */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30
                xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div >
    )
}

export default AboutPage