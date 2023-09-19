'use client'

import { FC } from 'react'
import styles from '@/styles'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { TypingText } from '../../components/CustomText'
import { motion } from 'framer-motion'
import { FiChevronsDown } from 'react-icons/fi'

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    return <section className={`${styles.paddings} relative z-10`}>
        <div className='gradient-02 opacity-30 z-0' />
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`2xl:max-w-[1280px] md:w-[85%] mx-auto ${styles.flexCenter} flex-col mb-20`}
        >
            <TypingText title="| The Future is Upon Us |" className='text-center pt-3' />


            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='relative flex w-full h-[370px]'
            >
                {/* MAP IMAGE */}
                <img src="/nftPage/circle.png" alt="circle" className='w-full h-[120%] object-cover scale-[1.7] opacity-20 pb-10' />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className='absolute lg:mt-[45px] font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-center text-secondary-white'
                >
                    Are you curious about the exciting world of NFTs but find the technical aspects a bit overwhelming?<br /><span className='font-extrabold text-white'> We&apos;ve got you covered!</span><br />

                    Introducing our user-friendly website designed exclusively for newcomers.  Our platform leverages the <span className='font-extrabold text-white'>&ldquo;Goerli Testnet&ldquo;</span> on the Ethereum blockchain, providing you with a <span className='font-extrabold text-white'> risk-free </span> environment to mint your very first NFTs.<br />
                    No need to worry about making mistakes or handling real cryptocurrencies just yet – this is your training ground!
                </motion.p>
            </motion.div>
            {/* <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
                className='w-[22px] h-[32px] object-contain mt-[30px] md:mt-[10px] mr-8'>
                <FiChevronsDown className="text-white text-[60px] mt-8 opacity-50" />
            </motion.div> */}
        </motion.div>
    </section>
}

export default About