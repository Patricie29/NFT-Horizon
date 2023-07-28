'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import { TitleText, TypingText } from '../components/CustomText'
import { newFeatures } from '@/constants'
import NewFeatures from '@/components/NewFeatures'

interface WhatsNewProps {

}

const WhatsNew: FC<WhatsNewProps> = ({ }) => {
    return <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >

            {/* TEXT */}
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className='flex-[1] flex justify-center flex-col'
            >
                <TypingText
                    title="| What's new? |" />
                <TitleText
                    title='Get started with only few Clicks' />
                <div className='mt-[40px] flex flex-wrap justify-between gap-[13px]'>
                    {newFeatures.map((oneFeature) => (
                        <NewFeatures
                            key={oneFeature.title}
                            {...oneFeature}
                        />
                    ))}
                </div>
            </motion.div>

            {/* rolling img */}
            <motion.div
                variants={planetVariants('right')}
                viewport={{ once: true }}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img
                    src='/whatsnew/nftStamp.png'
                    alt='getStarted'
                    className='w-[90%] h-[90%] object-contain'
                />
            </motion.div>
        </motion.div>
    </section>
}

export default WhatsNew