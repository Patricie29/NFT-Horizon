'use client'

import { FC, useEffect, useState } from 'react'
import { ConnectWallet, useContract, useClaimNFT, useClaimedNFTs, useTotalCount, useAddress } from "@thirdweb-dev/react";
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import Image from 'next/image';
import loading from '@/../public/loading/loading.gif'
import PageWrapper from '../pageWrapper';
import { motion } from 'framer-motion';



const page: FC = ({ }) => {

    const [totalSupply, setTotalSupply] = useState<number>()
    const [claimedSupply, setClaimedSupply] = useState<number>()

    // claiming NFT
    const { contract } = useContract("0xe63b0967EE4C0dAA100054561126e5690D826B5E");
    const {
        mutate: claimNFT,
        isLoading: mintingLoading,
        error,
    } = useClaimNFT(contract);

    if (error) {
        console.error("failed to claim nft", error);
    }

    const address = useAddress()

    // number of claimed NFTs
    const { data: claimedNFTs, isLoading: supplyLoading } = useClaimedNFTs(contract, { start: 0, count: 100 });
    // total available supply of NFTs
    const { data: count } = useTotalCount(contract);


    return <motion.main
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.7, type: 'tween' }}
        className='flex h-screen flex-col lg:grid grid-cols-10'
    >
        {/* left side of the screen */}
        <div className='bg-gradient-to-br from-blue-900 to-orange-600 lg:col-span-4'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                {/* gradient img border */}
                <div className='bg-gradient-to-br from-orange-400 to-purple-700 p-2 rounded-xl'>
                    <img src="/nft/bayc.png" alt="mayc"
                        className='rounded-xl w-44 object-cover lg:h-96 lg:w-72'
                    />
                </div>
                <div className='space-y-2 text-center p-5'>
                    <h1 className='text-xl font-bold text-white'>MAYC CLONES</h1>
                    <h2 className='text-xl text-gray-300'>Collection of fake Apes for all people</h2>
                </div>
            </div>

        </div>

        {/* right side of the screen */}
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            {/* header */}
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-max'>The
                    <span className='font-extrabold'>
                        {' '} Fake MAYC apes NFT
                    </span>
                    {' '} Marketplace
                </h1>
                <ConnectWallet className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base' />
                {/* 
                    <button className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>Sign In</button> */}
            </header>

            {/* line */}
            <hr className='my-2 border' />


            {/* Content */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
                <img src="https://links.papareact.com/bdy" alt="" className='w-80 object-cover pb-10 lg:h-40' />

                <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The NFT Horizon Coding Club | NFT Drop</h1>

                {supplyLoading ? (
                    <p className='pt-2 text-xl text-green-500 animate-pulse'> Supply count loading...</p>
                ) : (
                    <p className='pt-2 text-xl text-green-500'> {claimedNFTs?.length} / {count?.toString()}  NFTs claimed</p>
                )}

                <div className='h-[130px]'>
                    {supplyLoading && <Image src={loading} width={250} height={100} alt='loading' className='object-contain' />}
                </div>

            </div>

            {/* Mint Button */}
            <button className='mt-10 h-16 w-full bg-red-600 text-white rounded-full font-bold'
                onClick={() => claimNFT({ to: { address }, quantity: 1 })}
            >Mint NFT (0.01 ETH)</button>

        </div>
    </motion.main>
}

export default page