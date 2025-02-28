'use client';

import React, { useState, useEffect } from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';
import { SiGithub, SiReact, SiNextdotjs, SiTailwindcss,
         SiPython, SiSelenium, SiCurseforge, 
         SiOpencv} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandMinecraft } from 'react-icons/tb';
import { FaChevronLeft, FaChevronRight, FaRobot, FaGamepad } from 'react-icons/fa';
import FadeIn from '../animations/FadeIn';

const professionalProjects = [
    {
        title: "Les Blongios",
        description: "Refonte complète du site web de l'association Les Blongios avec une architecture moderne.",
        image: "/img/blongios-2.png",
        github: "https://github.com/louangr/blongios-website",
        demo: "https://www.lesblongios.fr",
        icons: [SiReact, SiNextdotjs, SiTailwindcss]
    },
    {
        title: "Job Decommissioning Automation",
        description: "Développement d'un système automatisé pour la Croix Rouge Française permettant la décommission des offres d'emploi expirées et leur archivage.",
        icons: [SiPython, SiSelenium, FaRobot],
        github: "https://github.com/louangr/crf-automation"
    }
];

const personalProjects = [
    {
        title: "Portfolio",
        description: "Portfolio personnel présentant mes compétences et projets, avec un design moderne et responsive.",
        image: "/img/portfolio.png",
        github: "https://github.com/louangr/portfolio",
        demo: "https://www.lesblongios.fr",
        icons: [SiReact, SiNextdotjs, SiTailwindcss]
    },
    {
        title: "Minecraft Enhancement Mod",
        description: "Mod Minecraft ajoutant de nouvelles fonctionnalités de gameplay et d'interface utilisateur pour améliorer l'expérience de jeu.",
        image: "/portfolio/img/mod-minecraft.jpg",
        github: "https://github.com/louangr/minecraft-mod",
        icons: [DiJava, TbBrandMinecraft, SiCurseforge],
        demo: "https://www.curseforge.com/minecraft/mc-mods/your-mod"
    },
    {
        title: "Computer Vision",
        description: "Apprendre à utiliser openvc et mediapipe",
        github: "https://github.com/louangr/minecraft-mod",
        icons: [SiPython, SiOpencv],
        demo: "https://www.curseforge.com/minecraft/mc-mods/your-mod"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <FadeIn>
            <div className={styles.card}>
                {project.image && (
                    <div className={styles.imageContainer}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                )}
                <div className={`${styles.content} ${!project.image ? styles.noImage : ''}`}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{project.title}</h3>
                        <div className={styles.icons}>
                            {project.icons.map((Icon, index) => (
                                <Icon key={index} className={styles.icon} />
                            ))}
                        </div>
                    </div>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.links}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <SiGithub />
                                <span>Code</span>
                            </a>
                        )}
                        {project.demo && (
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`${styles.link} ${project.title.includes('Minecraft') ? styles.downloadLink : ''}`}
                            >
                                {project.title.includes('Minecraft') ? <FaGamepad /> : null}
                                <span>{project.title.includes('Minecraft') ? 'Télécharger' : 'Demo'}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

const ProjectSection = ({ title, projects }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 3;

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    
    const getCurrentProjects = () => {
        const startIndex = currentPage * projectsPerPage;
        return projects.slice(startIndex, startIndex + projectsPerPage);
    };

    // Réinitialiser la page quand les projets changent
    useEffect(() => {
        setCurrentPage(0);
    }, [projects]);

    return (
        <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{title}</h3>
            <div className={styles.projectsGrid}>
                {getCurrentProjects().map((project, index) => (
                    <ProjectCard key={project.title + index} project={project} />
                ))}
            </div>

            {projects.length > 3 && (
                <div className={styles.pagination}>
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        disabled={currentPage === 0}
                        className={styles.paginationButton}
                    >
                        <FaChevronLeft />
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`${styles.paginationButton} ${currentPage === index ? styles.active : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        disabled={currentPage === totalPages - 1}
                        className={styles.paginationButton}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>My Projects</h2>
                
                <ProjectSection 
                    title="Professional Projects" 
                    projects={professionalProjects} 
                />
                
                <ProjectSection 
                    title="Personal Projects" 
                    projects={personalProjects} 
                />
            </div>
        </section>
    );
};

export default Projects; 