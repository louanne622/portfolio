'use client';  // Ajout de cette directive pour utiliser les hooks dans Next.js

import React from 'react';
import Flower from './flower/Flower';
import styles from './background.module.scss';
import { useEffect, useState } from 'react';

const Background = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const animate = () => {
            const time = Date.now() * 0.001;
            setOffset({
                x: Math.sin(time * 0.5) * 10,
                y: Math.cos(time * 0.3) * 10
            });
        };

        const intervalId = setInterval(animate, 50);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = styles.particle;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.getElementById('particleContainer').appendChild(particle);
            
            setTimeout(() => particle.remove(), 5000);
        };

        const interval = setInterval(createParticle, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.background} 
             style={{ 
                 transform: `translate(${offset.x}px, ${offset.y}px)` 
             }}>
            <div id="particleContainer" className={styles.particleContainer} />
            <Flower color="#FFB7C3" className={styles.flower1}/>
            <Flower color="#ADF7B6" className={styles.flower2}/>
            <Flower color="#A0CED9" className={styles.flower3}/>
            <Flower color="#FFC8DD" className={styles.flower4}/>
            <Flower color="#BDE0FE" className={styles.flower5}/>
            <Flower color="#CDB4DB" className={styles.flower6}/>
            <Flower color="#FFAFCC" className={styles.flower7}/>
            <Flower color="#90E0EF" className={styles.flower8}/>
            <Flower color="#FEC89A" className={styles.flower9}/>
            <Flower color="#B8F2E6" className={styles.flower10}/>
        </div>
    );
};

export default Background;
