'use client';

import React from 'react';
import styles from './Footer.module.scss';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Branding */}
                    <div className={styles.brand}>
                        <h3>Louanne.dev</h3>
                        <p>Full Stack Developer</p>
                    </div>

                    {/* Navigation Links */}
                    <div className={styles.links}>
                        <h4>Navigation</h4>
                        <nav>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className={styles.social}>
                        <h4>Follow Me</h4>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/louangr" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/louan" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>
                        Made with passion by Lou-Anne
                    </p>
                    <p>© {currentYear} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 