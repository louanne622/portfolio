'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import FadeIn from '../animations/FadeIn';
import Decorations from '../shared/Decorations';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Decorations />
            <div className={styles.heroContent}>
                <FadeIn direction="right">
                    <div className={styles.imageContainer}>
                        <Image
                            src="/portfolio/img/image.png"
                            alt="Lou-Anne profile picture"
                            width={400}
                            height={400}
                            className={styles.image}
                            priority
                        />
                    </div>
                </FadeIn>
                
                <div className={styles.content}>
                    <FadeIn delay={0.2}>
                        <h1 className={styles.title}>
                            Hello ! I'm <span className={styles.name}>Lou-Anne</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className={styles.description}>
                            I'm a full stack dev and love UX/UI design. Currently, I'm pursuing a work-study program as a software engineer at <a href="https://www.cesi.fr/" target="_blank" rel="noopener noreferrer" className={styles.link}>CESI Engineering School</a> while working at <a href="https://www.davidson.fr/" target="_blank" rel="noopener noreferrer" className={styles.link}>Davidson SI Nord</a>.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Hero; 