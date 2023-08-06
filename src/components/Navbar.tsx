'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import Link from 'next/link'


interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    return <motion.div
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className='absolute w-[100%] inset-8 gradient-01' />
        <div className={`${styles.innerWidth} mx-auto text-center sm:flex justify-between max-w-[940px] relative`}>
            <h2 className='text-[15px] font-light leading-[35px] border rounded-[6px] px-6 py-1 text-white cursor-pointer'>MARKETPLACE</h2>
            <Link href={'/'} className='cursor-pointer'>  <h2 className='text-[15px] font-light leading-[35px] border rounded-[6px] px-6 py-1 text-white cursor-pointer'>NFT VERSE</h2></Link>
            <Link href={'/nft'} className='cursor-pointer'>  <h2 className='text-[15px] font-light leading-[35px] border rounded-[6px] px-6 py-1 text-white cursor-pointer'>MINT OUR NFT</h2></Link>

        </div>

    </motion.div >

}

export default Navbar