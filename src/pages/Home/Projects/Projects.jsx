import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { projectsData } from '../../../utils/config'
import ProjectCard from './ProjectCard/ProjectCard';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import TiltCard from '../../../components/TiltCard/TiltCard';

const Projects = () => {

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionHeading
                    number="03"
                    subText="Some Things I've Built"
                    headText="Projects"
                />
            </motion.div>

            <ul className={styles.projectGrid}>
                {projectsData && projectsData.map((data, indx) =>
                    <motion.li
                        key={indx}
                        initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: indx * 0.15 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <TiltCard className={styles.projectCard}>
                            <ProjectCard data={data} />
                            <BackgroundImage
                                className={styles.backgroundImage}
                                imagesrc={data.image}
                                imagealt={data.title}
                            />
                        </TiltCard>
                    </motion.li>
                )}
            </ul>

        </section>
    )
}

export default Projects;
