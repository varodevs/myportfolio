"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
    children: React.ReactNode;
    heigh: string;
}

function HorizontalWrapperStart ({ children, heigh } : Props ) {
    return (
        <motion.div 
            initial={{ x: '-100vw' }} // Start off-screen to the left animate={{ x: 0 }} // Move to the final position
            animate={{x:0}}
            transition={{ type: 'spring' , stiffness: 100, damping: 15 }}
            style={{display: "flex", alignItems: "center", height: heigh}}
            >
            {children}
        </motion.div>
    );
};

export default HorizontalWrapperStart;