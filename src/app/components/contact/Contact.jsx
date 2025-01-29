'use client';

import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Decorations from '../shared/Decorations';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logique d'envoi du formulaire à implémenter
        console.log('Form submitted:', formData);
    };

    return (
        <section className={styles.contact} id="contact">
            <Decorations />
            <div className={styles.container}>
                <h2 className={styles.title}>Me Contacter</h2>
                
                <div className={styles.content}>
                    {/* Formulaire */}
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Envoyer
                            </button>
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div className={styles.contactInfo}>
                        <h3>Informations de Contact</h3>
                        <div className={styles.contactLinks}>
                            <a href="mailto:contact@louan.dev" className={styles.contactLink}>
                                <FaEnvelope />
                                <span>contact@louan.dev</span>
                            </a>
                            <a href="https://github.com/louanne622" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                <FaGithub />
                                <span>github.com/louangr</span>
                            </a>
                            <a href="https://www.linkedin.com/in/lou-anne-lecocq-0b600224a/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                <FaLinkedin />
                                <span>linkedin.com/in/louan</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 