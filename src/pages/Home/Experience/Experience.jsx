import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import styles from './Experience.module.css';
import { experiences } from "../../../utils/config";
import { useMediaQuery } from '@mui/material';

const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const Experience = () => {
    const isMobile = useMediaQuery('(max-width: 767.5px)');

    return (
        <section id="experience" className={styles.experience}>
            <motion.div
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
            >
                <SectionHeading subText="Where I've Worked" headText="Work Experience" />
            </motion.div>
            <div className={styles.timelineWrapper}>
                <VerticalTimeline animate={!isMobile} lineColor="rgba(100, 255, 218, 0.15)">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

const ExperienceCard = ({ experience }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#112240",
                color: "#ccd6f6",
                boxShadow: isHovered
                    ? `0 3px 0 ${experience.bottomColor || '#233554'}, 0 0 20px rgba(100, 255, 218, 0.15)`
                    : `0 3px 0 ${experience.bottomColor || '#233554'}`,
                borderRadius: "8px",
                border: isHovered
                    ? "1px solid rgba(100, 255, 218, 0.25)"
                    : "1px solid rgba(100, 255, 218, 0.06)",
                transition: "border 0.3s ease, box-shadow 0.3s ease",
            }}
            contentArrowStyle={{ borderRight: "7px solid #112240" }}
            date={experience.date}
            icon={
                <div className={styles.companyIconWrapper}>
                    <div className={styles.companyIconCircle}>
                        <img
                            src={experience.icon}
                            alt={experience.company_name}
                            className={styles.companyIcon}
                            loading="lazy"
                        />
                    </div>
                </div>
            }
        >
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={styles.cardContent}
            >
                <div className={styles.cardHeader}>
                    <div>
                        <h3 className={styles.companyTitle}>{experience.title}</h3>
                        <p className={styles.companyName}>{experience.company_name}</p>
                    </div>
                    {experience.location && (
                        <span className={styles.locationBadge}>
                            <svg
                                className={styles.locationIcon}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            {experience.location}
                        </span>
                    )}
                </div>
                <ul className={styles.ul_exp_points}>
                    {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className={styles.li_exp_points}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

export default Experience;
