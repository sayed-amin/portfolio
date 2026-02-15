import React from 'react'
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Form from './Form/Form';

const Contact = ({ children }) => {
    return (
        <section id="contact" className={styles.contact}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <SectionHeading
                    subText="Get In Touch"
                    headText="Contact"
                />
            </motion.div>
            <motion.p
                className={styles.contactSubtext}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
                I'm currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out.
            </motion.p>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
                <Form className={styles.formWrapper} />
            </motion.div>
            {children}
        </section>
    )
}

export default Contact;
