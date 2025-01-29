'use client';

import React from 'react';
import styles from './Gaming.module.scss';
import { FaPlaystation, FaSteam, FaXbox, FaTwitch } from 'react-icons/fa';
import { SiEpicgames, SiNintendoswitch, SiRiotgames } from 'react-icons/si';
import FadeIn from '../animations/FadeIn';
import Decorations from '../shared/Decorations';
import Image from 'next/image';

const games = [
    {
        title: "League of Legends",
        image: "/img/games/lol.jpg",
        category: "MOBA",
        platform: "PC",
        description: "Plus de 5 ans d'expérience, niveau Diamond",
        icon: SiRiotgames
    },
    {
        title: "The Legend of Zelda",
        image: "/img/games/zelda.jpg",
        category: "Action/Aventure",
        platform: "Nintendo Switch",
        description: "Fan de la série depuis Ocarina of Time",
        icon: SiNintendoswitch
    },
    {
        title: "Final Fantasy XIV",
        image: "/img/games/ffxiv.jpg",
        category: "MMORPG",
        platform: "PC/PS5",
        description: "Membre actif de la communauté depuis 2019",
        icon: FaPlaystation
    },
    {
        title: "Minecraft",
        image: "/img/games/minecraft.jpg",
        category: "Sandbox",
        platform: "PC",
        description: "Création de mods et participation à la communauté",
        icon: FaSteam
    }
];

const platforms = [
    { icon: FaSteam, name: "Steam" },
    { icon: FaPlaystation, name: "PlayStation" },
    { icon: SiNintendoswitch, name: "Nintendo Switch" },
    { icon: SiEpicgames, name: "Epic Games" },
    { icon: FaTwitch, name: "Twitch" }
];

const GameCard = ({ game }) => {
    return (
        <div className={styles.gameCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={game.image}
                    alt={game.title}
                    width={400}
                    height={225}
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <game.icon className={styles.gameIcon} />
                </div>
            </div>
            <div className={styles.gameContent}>
                <h3 className={styles.gameTitle}>{game.title}</h3>
                <span className={styles.category}>{game.category}</span>
                <p className={styles.gameDescription}>{game.description}</p>
                <div className={styles.platform}>
                    <span>{game.platform}</span>
                </div>
            </div>
        </div>
    );
};

const Gaming = () => {
    return (
        <section className={styles.gaming} id="gaming">
            <Decorations />
            <div className={styles.container}>
                <h2 className={styles.title}>Gaming Universe</h2>
                
                <div className={styles.platforms}>
                    {platforms.map((platform, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className={styles.platformIcon}>
                                <platform.icon />
                                <span>{platform.name}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className={styles.gamesGrid}>
                    {games.map((game, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <GameCard game={game} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gaming; 