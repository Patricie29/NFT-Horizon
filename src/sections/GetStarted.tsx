'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import { TitleText, TypingText } from '../components/CustomText'
import { startingFeatures } from '@/constants'
import StartSteps from '@/components/StartSteps'


interface GetStartedProps {

}

const GetStarted: FC<GetStartedProps> = ({ }) => {
    return <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >

            {/* rolling planet */}
            <motion.div
                variants={planetVariants('left')}
                viewport={{ once: true }}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img
                    src='/getStarted/nft1.png'
                    alt='getStarted'
                    className='w-[90%] h-[90%] object-contain'
                />
            </motion.div>

            {/* TEXT */}
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] flex justify-center flex-col'
            >
                <TypingText
                    title='| How NFTs work' />
                <TitleText
                    title='Get started with only few Clicks' />
                <div className='mt-[32px] flex flex-col max-w-[370px] gap-[24px]'>
                    {startingFeatures.map((oneFeature: string, index: number) => (
                        <StartSteps
                            key={oneFeature}
                            number={index + 1}
                            text={oneFeature}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
}

export default GetStarted