'use client'

import { FC, useEffect, useState } from 'react'
import PageWrapper from '../pageWrapper';
import { motion } from 'framer-motion';
import { planetVariants, textVariant } from '@/utils/motion';
import styles from '@/styles';
import Intro from '@/sections/NFTMint/Intro';
import About from '@/sections/NFTMint/About';
import Mint from '@/sections/NFTMint/Mint';
import Footer from '@/components/Footer';



const page: FC = ({ }) => {

    return <motion.main
        // initial={{ x: 1500 }}
        // animate={{ x: 0 }}
        // exit={{ x: -300 }}
        // transition={{ duration: 0.7, type: 'tween' }}
        className={`${styles.interWidth} mx-auto mt-8`}
    >
        <Intro />
        <div className="relative">
            <About />
            <div className="gradient-03 z-0 opacity-60" />
            <Mint />
            <Footer />
        </div>


    </motion.main >
}

export default page