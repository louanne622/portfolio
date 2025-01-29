'use client';

import React from 'react';
import styles from './Hobbies.module.scss';
import { FaGamepad, FaCode, FaLaptop, FaBookReader, FaMusic, FaCamera } from 'react-icons/fa';
import { SiUnrealengine } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import FadeIn from '../animations/FadeIn';
import Decorations from '../shared/Decorations';

const hobbies = [
    {
        icon: FaGamepad,
        title: "Gaming",
        description: "Passionnée de jeux vidéo, particulièrement les RPG et les jeux de stratégie",
        color: "#FF6B6B"
    },
    {
        icon: SiUnrealengine,
        title: "Game Dev",
        description: "Création de jeux vidéo comme hobby, exploration des moteurs de jeu modernes",
        color: "#4ECDC4"
    },
    {
        icon: FaCode,
        title: "Side Projects",
        description: "Développement de projets personnels pour explorer de nouvelles technologies",
        color: "#45B7D1"
    },
    {
        icon: TbBrain,
        title: "IA & ML",
        description: "Exploration des technologies d'intelligence artificielle et du machine learning",
        color: "#96CEB4"
    },
    {
        icon: FaBookReader,
        title: "Tech Watch",
        description: "Veille technologique et lecture d'articles sur les nouvelles technologies",
        color: "#9B59B6"
    },
    {
        icon: FaCamera,
        title: "Photographie",
        description: "Photographie numérique et retouche photo comme activité créative",
        color: "#F39C12"
    }
];

const HobbyCard = ({ hobby, index }) => {
    return (
        <FadeIn delay={index * 0.1}>
            <div className={styles.card}>
                <div className={styles.iconWrapper} style={{ backgroundColor: `${hobby.color}15` }}>
                    <hobby.icon className={styles.icon} style={{ color: hobby.color }} />
                </div>
                <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
                <p className={styles.description}>{hobby.description}</p>
            </div>
        </FadeIn>
    );
};

const Hobbies = () => {
    return (
        <section className={styles.hobbies} id="hobbies">
            <Decorations />
            <div className={styles.container}>
                <h2 className={styles.title}>Centres d'Intérêt</h2>
                <div className={styles.grid}>
                    {hobbies.map((hobby, index) => (
                        <HobbyCard key={index} hobby={hobby} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies; 