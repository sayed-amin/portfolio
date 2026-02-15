import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DecoderText from '../../../components/DecoderText/DecoderText'
import "./style.css"
import ScramblingText from './../../../components/ScramblingText/ScramblingText';
import { introAnimatedText, myName, shortDescription } from "../../../utils/config";

// Orchestrator variants for staggered children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

// "Hi, my name is" -- subtle slide from left
const slideFromLeftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Name -- scale-up entrance
const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Short description -- simple fade in
const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

// Scrambling text -- slide up
const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Intro summary -- fade in last (opacity-only for blur-to-clear feel)
const fadeInLastVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const Intro = () => {
    const mountDelay = 800;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="home" className="section">
            <div className="intro_sec d-flex align-items-center">
                <div className="intro mx-auto">
                    <AnimatePresence>
                        {isMounted && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {/* Hi, my name is -- slide from left */}
                                <motion.div variants={slideFromLeftVariants}>
                                    <div className="hithere">
                                        Hi, my name is
                                    </div>
                                </motion.div>

                                {/* Name -- scale-up entrance */}
                                <motion.div variants={scaleUpVariants}>
                                    <h1 className='myname'>
                                        <DecoderText text={myName} eachCharClass="namechar" delay={200} />
                                    </h1>
                                </motion.div>

                                {/* Short description -- fade in */}
                                <motion.div variants={fadeInVariants}>
                                    <h3>{shortDescription}</h3>
                                </motion.div>

                                {/* Scrambling text -- slide up */}
                                <motion.div variants={slideUpVariants}>
                                    <div className="mytextcolorwhite font-2-4">
                                        <ScramblingText data={introAnimatedText} delay={1500} />
                                    </div>
                                </motion.div>

                                {/* Intro summary -- fade in last with opacity ramp */}
                                <motion.div variants={fadeInLastVariants}>
                                    <p className="intro-summary">
                                        I build scalable systems that handle millions of transactions. Currently leading technology at Digital Benchers,
                                        previously engineering fintech infrastructure at FSS for major Indian banks.
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Intro;
