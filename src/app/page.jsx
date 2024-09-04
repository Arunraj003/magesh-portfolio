"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume .pdf';
    link.download = 'public\resume .pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row 
  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="hero"
            className="object-contain" fill />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex
     flex-col gap-8 items-center justify-center">
          {/* title  */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Elevating Your Brand's Digital Presence.
          </h1>
          {/* desc  */}
          <p className="md:text-xl">Magesh S specializes in transforming your brand's online presence with innovative strategies and data-driven insights. By leveraging the latest in digital marketing techniques, he ensures your business reaches its full potential. Elevate your brand today and stand out in the digital landscape with Magesh's expertise.</p>

          {/* button  */}
          <div className="flex gap-4">
            {/* resume button  */}
            <button
              onClick={handleDownload}
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              Download Resume
            </button>
            {/* contact button  */}
            <Link href="/contact" passHref>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>;
    </motion.div>
  )
};

export default Homepage;
