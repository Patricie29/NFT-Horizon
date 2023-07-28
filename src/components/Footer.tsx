'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { footerVariants } from '@/utils/motion'
import { socials } from '@/constants'


interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <>
        <motion.footer
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            className={`${styles.paddings} py-8 relative`}
        >
            <div className='footer-gradient' />

            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                {/* <div className='flex items-center justify-between flex-wrap gap-5'>
                    <h4 className='font-bold md:text-[44px] text-[34px] text-white'>Enter above Horizon</h4>

                    <button className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]' type='button'>
                        <img src="/headset.svg" alt="headset" className='w-[24px] h-[24px] object-contain' />
                        <span className='font-normal text-13px text-white'>Marketplace</span>
                    </button>
                </div> */}

                <div className='flex flex-col'>
                    {/* LINE */}
                    <div className='mb-[50px] h-[2px] bg-white opacity-10' />

                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 className='font-extrabold text-[24px] text-white'>NFT HORIZON</h4>
                        <p className='font-normaln text-[14px] text-white opacity-50'>Copyright © 2023 NFT Horizon. All rights reserved.</p>

                        {/* SOCIALS */}
                        <div className='flex gap-4'>
                            {
                                socials.map((oneSocial) => (
                                    <img src={oneSocial.url} alt={oneSocial.name} key={oneSocial.name} className='w-[24px] h-[24px] object-contain cursor-pointer' />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

        </motion.footer>
    </>
}

export default Footer