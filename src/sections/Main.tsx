'use client'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { slideIn, staggerContainer, textVariant } from '@/utils/motion'
import Image from 'next/image'
import Link from 'next/link'



const Main = ({ }) => {
    return <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} flex flex-col justify-center items-center mx-auto`}
        >

            {/* main heading */}
            <div className='relative z-10'>
                <motion.h1
                    variants={textVariant(1.1)}
                    className='font-bold lg:text-[90px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[90px] md:leading-[80px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white text-center tracking-[25px] md:tracking-[50px]'
                >
                    NFT
                </motion.h1>

                <motion.div
                    variants={textVariant(1.2)}
                    className='flex flex-row justify-center items-center'
                >
                    {/* <div className='sm:w-[80px] md:w-[212px] w-[60px] sm:h-[48px] md:h-[108px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]' /> */}
                    {/* <h1 className='font-bold lg:text-[110px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white tracking-[20px]'>HORIZON</h1> */}

                    {/* <h1 className='font-bold lg:text-[110px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white tracking-[10px] md:tracking-[20px] relative'>
                        <span>HORI</span>
                        <span className="inline-block transform scale-150 sm:scale-165 translate-x-2 -translate-y-1.1 md:-translate-y-1 md:translate-x-3">
                            <span className="relative overflow-hidden">
                                <span className="font-normal">Z</span>
                                <span className="absolute right-[30px] sm:right-[40px] lg:right-[73px] w-full h-[3.1px] sm:h-[4.5px] lg:h-[8.2px] bg-white top-[12.7px] sm:top-[17.76px] lg:top-[32.2px]"></span>
                                <span className="absolute left-[19px] sm:left-[28px] lg:left-[60px] w-full h-[3.7px] sm:h-[4.5px] lg:h-[8.2px] bg-white bottom-[10px] sm:bottom-[13.7px] lg:bottom-[24.5px]"></span>
                            </span>
                        </span>
                        <span>ON</span>
                    </h1> */}

                    <h1
                        className="font-bold lg:text-[110px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white tracking-[10px] md:tracking-[20px] relative"
                    >
                        <span>HORI</span>
                        <span
                            className="inline-block transform scale-y-150 scale-x-[3] skew-x-[35deg] font-light sm:scale-y-165 translate-x-2 -translate-y-1.1 md:-translate-y-1 md:translate-x-5 text-yellow-400"
                        >
                            Z
                        </span>
                        <span>ON</span>
                    </h1>
                </motion.div>

            </div >


            {/* picture with a stamp */}
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='relative w-full md:-mt-[20px] -mt-[12px]' >
                <div className='absolute w-full h-[150px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
                <Image src='/mainPicture/nftverse.png' alt='cover' width={1000} height={1000}
                    className='w-full sm:h-[390px] h-[300px] object-cover rounded-tl-[140px] z-10 relative' />

                <a href='#explore'>
                    <div className='w-full flex justify-end sm:-mt-[90px] -mt-[50px] pr-[50px] relative z-10'>
                        <img src='/mainPicture/baycstamp.webp' alt='stamp' className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' />
                    </div>
                </a>
            </motion.div>
        </motion.div >
    </section >
}

export default Main