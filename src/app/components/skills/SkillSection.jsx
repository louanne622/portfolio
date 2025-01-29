'use client';

import React from 'react';
import styles from './Skills.module.scss';

const SkillSection = ({ title, skills }) => {
    return (
        <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{title}</h3>
            <div className={styles.sectionGrid}>
                {skills.map(({ icon: Icon, name, color }) => (
                    <div key={name} className={styles.skill}>
                        <Icon size={48} color={color} className={styles.icon} />
                        <span className={styles.name}>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSection; 