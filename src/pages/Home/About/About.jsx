import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Skills from './Skills/Skills';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <SectionHeading
                    subText="Introduction"
                    headText="About Me"
                />
            </motion.div>
            <motion.p
                className={styles.aboutText}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
                Full-stack Software Engineer with 2.5+ years building fintech systems processing 3M+ transactions/day.
                Currently serving as CTO at Digital Benchers, driving 25x company growth.
                Previously engineered Java/Spring Boot microservices and PCI-compliant banking infrastructure
                at FSS for major Indian banks including SBI, IDFC, and KVB.
            </motion.p>
            <Skills />
        </section>
    )
}

export default About;
