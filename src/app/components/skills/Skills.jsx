'use client';

import React, { useState, useRef } from 'react';
import styles from './Skills.module.scss';
import SkillSection from './SkillSection';
import { 
    SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
    SiNodedotjs, SiPostgresql,
    SiGit, SiDocker,
    SiAngular, SiFirebase, SiStrapi,
    SiFigma,
    SiIntellijidea, SiMysql, SiGradle,
    SiPostman, SiGithub, SiGitlab,
    SiAdobexd, SiAdobephotoshop, SiCanva,
    SiPython, SiTensorflow, SiPytorch, SiOpenai,
    SiApachemaven
} from 'react-icons/si';
import { DiJava, DiVisualstudio } from 'react-icons/di';
import { GiSpring } from 'react-icons/gi';
import { BiLogoSpringBoot } from 'react-icons/bi';
import FadeIn from '../animations/FadeIn';
import { TbBrandChatgpt } from 'react-icons/tb';
import { 
    FaUserFriends, 
    FaLightbulb, 
    FaBrain,
    FaComments, 
    FaChartLine, 
    FaClock,
    FaPuzzlePiece,
    FaHandshake
} from 'react-icons/fa';
import Decorations from '../shared/Decorations';

const SKILLS_ARRAY = [
    {
        title: "Frontend Development",
        skills: [
            { icon: SiReact, name: 'React', color: '#61DAFB' },
            { icon: SiAngular, name: 'Angular', color: '#DD0031' },
            { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
            { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
            { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
            { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        ]
    },
    {
        title: "Backend & APIs",
        skills: [
            { icon: DiJava, name: 'Java', color: '#007396' },
            { icon: BiLogoSpringBoot, name: 'Spring Boot', color: '#6DB33F' },
            { icon: GiSpring, name: 'Spring', color: '#6DB33F' },
            { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
            { icon: SiStrapi, name: 'Strapi', color: '#2F2E8B' },
            { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
        ]
    },
    {
        title: "Database & Services",
        skills: [
            { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
            { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
        ]
    },
    {
        title: "Build & Package Tools",
        skills: [
            { icon: SiGradle, name: 'Gradle', color: '#02303A' },
            { icon: SiApachemaven, name: 'Maven', color: '#C71A36' },
            { icon: SiDocker, name: 'Docker', color: '#2496ED' },
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { icon: SiGit, name: 'Git', color: '#F05032' },
            { icon: SiGithub, name: 'GitHub', color: '#181717' },
            { icon: SiGitlab, name: 'GitLab', color: '#FCA121' },
        ]
    },
    {
        title: "AI & Machine Learning",
        skills: [
            { icon: SiPython, name: 'Python', color: '#3776AB' },
            { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
            { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
            { icon: SiOpenai, name: 'OpenAI API', color: '#000000' }
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            { 
                icon: FaUserFriends, 
                name: 'Team Work', 
                color: '#4F46E5'
            },
            { 
                icon: FaLightbulb, 
                name: 'Problem Solving', 
                color: '#F59E0B'
            },
            { 
                icon: FaBrain, 
                name: 'Adaptability', 
                color: '#10B981'
            },
            { 
                icon: FaComments, 
                name: 'Communication', 
                color: '#6366F1'
            },
            { 
                icon: FaChartLine, 
                name: 'Project Management', 
                color: '#EC4899'
            },
            { 
                icon: FaClock, 
                name: 'Time Management', 
                color: '#8B5CF6'
            },
            { 
                icon: FaPuzzlePiece, 
                name: 'Critical Thinking', 
                color: '#EF4444'
            },
            { 
                icon: FaHandshake, 
                name: 'Leadership', 
                color: '#059669'
            }
        ]
    },
    {
        title: "Design Tools",
        skills: [
            { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
            { icon: SiAdobexd, name: 'Adobe XD', color: '#FF61F6' },
            { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF' },
            { icon: SiCanva, name: 'Canva', color: '#00C4CC' },
        ]
    },
    {
        title: "Development Tools",
        skills: [
            { icon: SiIntellijidea, name: 'IntelliJ IDEA', color: '#000000' },
            { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
            { icon: DiVisualstudio, name: 'VS Code', color: '#007ACC' },
        ]
    }
];

const SkillCard = ({ skill, delay = 0 }) => {
    return (
        <FadeIn delay={delay}>
            <div className={styles.skillCard}>
                {/* ... */}
            </div>
        </FadeIn>
    );
};

const Skills = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const navigationRef = useRef(null);

    const handleSectionChange = (index) => {
        setCurrentSection(index);
        
        // Centrer le bouton sélectionné
        if (navigationRef.current && index !== 0 && index !== SKILLS_ARRAY.length - 1) {
            const button = navigationRef.current.children[index];
            const container = navigationRef.current;
            const buttonCenter = button.offsetLeft + (button.offsetWidth / 2);
            const containerCenter = container.offsetWidth / 2;
            const scrollPosition = buttonCenter - containerCenter;
            
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.skills} id="skills">
            <Decorations />
            <div className={styles.container}>
                <h2 className={styles.title}>Technologies I Work With</h2>
                <div className={styles.navigation} ref={navigationRef}>
                    {SKILLS_ARRAY.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => handleSectionChange(index)}
                            className={`${styles.navButton} ${
                                currentSection === index ? styles.activeNav : ''
                            }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                <div className={styles.sectionsContainer}>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{SKILLS_ARRAY[currentSection].title}</h3>
                        <div className={styles.sectionGrid} data-items={SKILLS_ARRAY[currentSection].skills.length}>
                            {SKILLS_ARRAY[currentSection].skills.map((skill, index) => (
                                <div key={index} className={styles.skill}>
                                    <skill.icon 
                                        className={styles.icon} 
                                        style={{ color: skill.color }} 
                                    />
                                    <span className={styles.name}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 