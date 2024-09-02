"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion"; 

interface Props {
    children: React.ReactNode;
    direction: number;
    height: string;
}

function HorizontalWrapper ({children, direction, height} : Props) {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: scrollRef,
    });

    const xTransform = useTransform(
        scrollYProgress, 
        [0, 0.1, 1], 
        [0, 0, direction]
    );

    return <div ref={scrollRef}>
        <motion.div style={{
            height: height,
            translateX: xTransform,
            display: "flex",
            background: "red",
            }}>{children}</motion.div>
        </div>
}

export default HorizontalWrapper;