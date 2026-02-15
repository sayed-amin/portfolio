import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { projectsData } from '../../../utils/config'
import ProjectCard from './ProjectCard/ProjectCard';
import BackgroundImage from './BackgroundImage/BackgroundImage';

const Projects = () => {

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionHeading
                    subText="Some Things I've Built"
                    headText="Projects"
                />
            </motion.div>

            <ul className={styles.projectGrid}>
                {projectsData && projectsData.map((data, indx) =>
                    <motion.li
                        key={indx}
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: indx * 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ y: -8 }}
                    >
                        <ProjectCard data={data} />
                        <BackgroundImage
                            className={styles.backgroundImage}
                            imagesrc={data.image}
                            imagealt={data.title}
                        />
                    </motion.li>
                )}
            </ul>

        </section>
    )
}

export default Projects;
