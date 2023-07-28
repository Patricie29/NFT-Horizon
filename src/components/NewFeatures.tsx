'use client'

import { NewFeature } from '@/constants'
import { FC } from 'react'
import styles from '@/styles'

interface NewFeaturesProps extends NewFeature {

}

const NewFeatures: FC<NewFeaturesProps> = ({ imgUrl, subtitle, title }) => {
    return <>
        <div className='flex flex-1 flex-col sm:max-w-[220px] min-w-[180px]'>
            {/* IKON */}
            <div className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] bg-[#323f5d]`}>
                <img src={imgUrl} alt="icon" className='w-1/2 h-1/2 object-contain' />
            </div>

            <h1 className='mt-[26px] font-bold text-[20px] leading-[20px] text-white'>Title {title}</h1>
            <p className='flex-1 mt-[16px] font-normal text-13px text-[#b0b0b0] leading-[27px]'>{subtitle}</p>
        </div>
    </>
}

export default NewFeatures