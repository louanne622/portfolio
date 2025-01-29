'use client';

import React, { useEffect, useState } from 'react';
import styles from './Metrics.module.scss';
import { FaCode, FaProjectDiagram, FaCoffee, FaGithub } from 'react-icons/fa';
import FadeIn from '../animations/FadeIn';
import Decorations from '../shared/Decorations';

const metrics = [
    {
        icon: FaCode,
        value: 50000,
        label: "Lignes de code",
        suffix: "+",
        color: "#3B82F6"
    },
    {
        icon: FaProjectDiagram,
        value: 15,
        label: "Projets réalisés",
        suffix: "",
        color: "#6366F1"
    },
    {
        icon: FaCoffee,
        value: 1825,
        label: "Tasses de café",
        suffix: "+",
        color: "#8B5CF6"
    },
    {
        icon: FaGithub,
        value: 250,
        label: "Contributions",
        suffix: "+",
        color: "#EC4899"
    }
];

const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let animationFrameId;
        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

const Metrics = () => {
    return (
        <section className={styles.metrics} id="metrics">
            <Decorations />
            <div className={styles.container}>
                <h2 className={styles.title}>Mes Métriques</h2>
                <div className={styles.grid}>
                    {metrics.map((metric, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div className={styles.card}>
                                <metric.icon 
                                    className={styles.icon} 
                                    style={{ color: metric.color }} 
                                />
                                <div className={styles.value}>
                                    <Counter 
                                        end={metric.value} 
                                        suffix={metric.suffix} 
                                    />
                                </div>
                                <div className={styles.label}>{metric.label}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics; 