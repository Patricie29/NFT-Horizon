'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'


interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    return <motion.nav
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className='absolute w-[100%] inset-8 gradient-01' />
        <div className={`${styles.innerWidth} mx-auto text-center sm:flex justify-between max-w-[940px]`}>
            <h2 className='text-[15px] font-light leading-[35px] border rounded-[6px] px-6 py-1 text-white cursor-pointer'>MARKETPLACE</h2>
            <h2 className='text-[15px] font-light leading-[35px] border rounded-[6px] px-6 py-1 text-white cursor-pointer'>NFTVERSE</h2>
            <h2 className='text-[15px] font-light leading-[35px] border rounded-[6px] px-6 py-1 text-white cursor-pointer'>CREATE YOUR OWN</h2>
        </div>

    </motion.nav >
}

export default Navbar