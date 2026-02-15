import React, { memo } from 'react'
import { motion } from 'framer-motion';
import { skills } from '../../../../utils/config'
import styles from './Skills.module.css';
import LazyLoad from 'react-lazyload';

const categoryVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    visible: (idx) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            delay: idx * 0.15,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.06,
        },
    }),
};

const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.35, ease: 'easeOut' },
    },
};

const Skills = () => (
    <div className={styles.skills_wrapper}>
        {skills.map((skill, idx) => (
            <SkillCategory
                name={skill.name}
                items={skill.items}
                key={idx}
                index={idx}
            />
        ))}
    </div>
);

const SkillCategory = ({ name, items, index }) => (
    <motion.div
        className={styles.skill_category_container}
        custom={index}
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
        <div className={styles.skill_title}>
            <div className={styles.arrow_img_container}>
                <img src="/skills/arrow.svg" alt="" />
            </div>
            <h3>{name}</h3>
        </div>
        <div className={styles.skills_container}>
            {items.map((item, idx) => (
                <SkillBubble name={item} key={idx} />
            ))}
        </div>
    </motion.div>
);

const SkillBubble = memo(({ name }) => (
    <motion.div
        className={styles.skill_bubble_container}
        variants={bubbleVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
        <LazyLoad once height={41.46} className={styles.skill_img_container}>
            <img src={`/skills/` + name + `.svg`} alt={name} loading="lazy" />
        </LazyLoad>
        <h3>{name}</h3>
    </motion.div>
));

export default Skills;
