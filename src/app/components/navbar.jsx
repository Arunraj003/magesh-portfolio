"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink'
import { motion } from 'framer-motion'


// menu 
const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
]


const Navbar = () => {

    // animations for sidebar menu hamburger navabar
    const [open, setOpen] = useState(false);
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        }
    }

    // list variants for animation 
    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        },
    };

    // item variables for sidebar menu animations 
    const listItemVariants = {
        closed: {
            x: 10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* links here */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO  */}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href="/"
                    className='text-sm bg-black rounded-md p-1 font-semibold flex 
                    items-center justify-center'>
                    <span className="text-white mr-1">Magesh</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
                        S
                    </span>
                </Link>
            </div>
            <div className='hidden md:flex gap-4'>
                <Link href="/">
                    <Image
                        src="/github.png"
                        alt="github-logo"
                        width={24}
                        height={24} />
                </Link>
                <Link href="/">
                    <Image
                        src="/facebook.png"
                        alt="facebook-logo"
                        width={24}
                        height={24} />
                </Link>
                <Link href="/">
                    <Image
                        src="/instagram.png"
                        alt="instagram-logo"
                        width={24}
                        height={24} />
                </Link>
                <Link href="/">
                    <Image
                        src="/linkedin.png"
                        alt="linkedin-logo"
                        width={24}
                        height={24} />
                </Link>
                <Link href="/">
                    <Image
                        src="/pinterest.png"
                        alt="pinterest-logo"
                        width={24}
                        height={24} />
                </Link>
            </div>
            {/* Responsive navbar  */}
            <div className='md:hidden'>

                <button className='w-10 h-8 mr-3 flex flex-col justify-between z-50 relative
                'onClick={(() => setOpen((prev) => !prev))}>
                    <motion.div animate={open ? "opened" : "closed"}
                        variants={topVariants}
                        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div animate={open ? "opened" : "closed"}
                        variants={centerVariants}
                        className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div animate={open ? "opened" : "closed"}
                        variants={bottomVariants}
                        className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>

                {/* menu lists here */}
                {open && (
                    <motion.div variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen
                     bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10">

                        {links.map((link) =>
                            <motion.div variants={listItemVariants} className=""
                                key={link.title}>
                                <Link href={link.url} >
                                    {link.title}
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar