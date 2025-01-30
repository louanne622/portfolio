'use client';

import React from 'react';
import styles from './About.module.scss';
import { FaGraduationCap, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';
import Decorations from '../shared/Decorations';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <Decorations />
            <div className={styles.container}>
                <FadeIn>
                    <h2 className={styles.title}>About Me</h2>
                </FadeIn>
                
                <div className={styles.content}>
                    <FadeIn direction="right">
                        <div className={styles.imageSection}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src="/img/picture.jpg"
                                    alt="picture louanne"
                                    width={400}
                                    height={400}
                                    className={styles.profileImage}
                                />
                            </div>
                        </div>
                    </FadeIn>

                    <div className={styles.textSection}>
                        <FadeIn delay={0.2}>
                            <h3 className={styles.subtitle}>Passionate Full Stack Developer</h3>
                            <p className={styles.description}>
                                I'm a full stack developer based in Lille, passionate about creating 
                                modern and performant web applications. My journey has allowed me 
                                to gain solid expertise in development, both front-end and back-end.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className={styles.highlights}>
                                <div className={styles.highlight}>
                                    <FaGraduationCap className={styles.icon} />
                                    <h4>Education</h4>
                                    <p>Engineering School - CESI Engineering School</p>
                                </div>

                                <div className={styles.highlight}>
                                    <FaLaptopCode className={styles.icon} />
                                    <h4>Expertise</h4>
                                    <p>Full Stack Development</p>
                                </div>

                                <div className={styles.highlight}>
                                    <FaUserTie className={styles.icon} />
                                    <h4>Experience</h4>
                                    <p>2+ years in development</p>
                                    
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className={styles.interests}>
                                <h4>Interests</h4>
                                <ul>
                                    <li>New technologies</li>
                                    <li>Game development</li>
                                    <li>Open source</li>
                                    <li>Continuous learning</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 