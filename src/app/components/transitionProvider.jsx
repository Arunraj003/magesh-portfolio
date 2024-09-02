import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathName}
                className="w-screen h-screen bg-gradient-to-b from-red-50 to-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "100vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
