'use client';

import { motion } from 'framer-motion';


const FadeIn = ({ children, direction = 'up', delay = 0, className = '' }) => {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: -40 },
        right: { x: 40 }
    };

    return (
        <motion.div
            initial={{
                ...directions[direction],
                opacity: 0
            }}
            whileInView={{
                y: 0,
                x: 0,
                opacity: 1
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }}
            className={className}
        >
            {children}
        </motion.div>
        
    );
};

export default FadeIn; 