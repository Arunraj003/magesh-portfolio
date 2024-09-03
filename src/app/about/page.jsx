"use client";

import { motion } from "framer-motion"
import React from "react"


const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}>
            {/* container  */}
            <div className="">
                {/* text section */}
                <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                    <div className="">
                        BIOGRAPHY
                    </div>
                    <div className="">
                        SKILLS
                    </div>
                    <div className="">
                        EXPERIENCE
                    </div>
                </div>
                {/* svg section */}
            </div>
        </motion.div>
    )
}

export default AboutPage