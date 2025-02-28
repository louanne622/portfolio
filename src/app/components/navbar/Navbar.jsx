'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    Louanne.dev
                </a>

                {/* Desktop Menu */}
                <div className={styles.nav}>
                    <a href="#" className={styles.link}>Home</a>
                    <a href="#about" className={styles.link}>About</a>
                    <a href="#skills" className={styles.link}>Skills</a>
                    <a href="#projects" className={styles.link}>Projects</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </div>

                {/* Hamburger Menu */}
                <button 
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
                </button>

                {/* Menu Mobile */}
                {isOpen && (
                    <div className={styles.mobileNav}>
                        <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#skills" className={styles.link} onClick={() => setIsOpen(false)}>Skills</a>
                        <a href="#projects" className={styles.link} onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#contact" className={styles.link} onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;