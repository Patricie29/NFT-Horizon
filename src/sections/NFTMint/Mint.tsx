'use client'

import { FC } from 'react'
import { ConnectWallet, useContract, useClaimNFT, useClaimedNFTs, useTotalCount, useAddress, useTotalCirculatingSupply } from "@thirdweb-dev/react";
import styles from '@/styles';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import { TypingText } from '@/components/CustomText';
import loading from '../../../public/loading/loading.gif'
import boredBAYC from '@/../public/nftPage/boredBAYC.webp'
import Image from 'next/image';
import { cn } from '@/utils/utils';


interface MintProps {

}


const Mint: FC<MintProps> = ({ }) => {
    // Address of Collection
    const { contract } = useContract("0xe63b0967EE4C0dAA100054561126e5690D826B5E")
    // Address of User
    const address = useAddress()

    // claiming NFT
    const {
        mutate: claimNFT,
        isLoading: mintingLoading,
        error,
    } = useClaimNFT(contract);

    const mintNFT = async () => {
        toast.loading('Minting your NFT...', {
            position: "top-center",
            theme: "dark",
        });

        try {
            claimNFT({ to: address, quantity: 1 });
            toast.success('Hooray! You successfully minted!', {
                position: "top-center",
                theme: "dark",
            });
        } catch (error) {
            console.error("Failed to claim NFT", error);
            toast.error('Whoops... Something went wrong!', {
                position: "top-center",
                theme: "dark",
            });
        }
    }


    // number of claimed NFTs
    const { data: totalCirculatingSupply, isLoading: supplyLoading } = useTotalCirculatingSupply(contract);
    const mintedCount = totalCirculatingSupply?.toString()

    // total available supply of NFTs
    const { data: count } = useTotalCount(contract);
    const totalCount = count?.toString()

    return <>

        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`relative z-10`} id='mint'>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" /> */}

            <div className='gradient-05 opacity-30 z-0' />
            {/* header */}
            {/* line */}
            <div className='my-2 h-[2px] bg-white opacity-25' />
            <motion.header
                variants={fadeIn('up', 'tween', 0.1, 1)}
                className='flex items-center justify-between z-10 mt-6 mr-4 text-[#cbd5e1]'>
                <h1 className='w-52 cursor-pointer text-2xl font-normal sm:w-max'>Your NFT Journey Starts Here!
                </h1>
                {/* CONNECT BUTTON */}
                <div className='relative'>
                    <ConnectWallet className='customConnectBtn' />
                </div>
            </motion.header>

            {/* SECTIONS CONTENT */}
            <div className='flex gap-12 mt-6'>
                {/* LEFT side of the screen */}
                <section>

                    <motion.div
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className='mt-4 flex flex-1 flex-col items-center space-y-6 my-9 text-center lg:space-y-0 lg:justify-center'>

                        <TypingText
                            title="The NFT Horizon Coding Club"
                            className="my-2 py-2 text-4xl font-bold" />
                        <TypingText
                            title="| Mint Fake BAYC NFT Drop |"
                            className="my-2 py-2" />

                    </motion.div>
                    <Image src={boredBAYC} alt="bayc" className='lg:w-[500px] object-cover mb-8 lg:h-[200px]' />
                    {supplyLoading ? (
                        <p className={`${styles.flexCenter}pt-2 text-lg text-green-500 animate-pulse`}> Supply count loading...</p>
                    ) : (
                        <p className={`${styles.flexCenter}pt-2 text-lg text-green-500`}> {mintedCount} / {totalCount}  NFTs claimed</p>
                    )}

                </section>

                {/* RIGHT side of the screen */}
                <section>

                    {/* STEPS */}
                    <motion.div
                        variants={slideIn('right', 'tween', 0.2, 1)}
                        className='w-full flex justify-center flex-col'
                    >
                        <div className='flex flex-col gap-[46px] my-6'>

                            <div
                                className={`${styles.flexCenter} flex-row w-full`}
                            >
                                <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[100px] bg-[#323f5d]`}>
                                    <p className='font-bold text-[16px] text-white'>1</p>
                                </div>
                                <p className='flex-1 ml-[15px] text-[15px] text-[#b0b0b0] leading-[22px] font-normal text-left'><strong className='text-zinc-200'>Connect your Wallet: </strong>
                                    Follow the steps by clicking on our Connect Wallet button and login with your desired wallet. If you&apos;re not sure what this is, then check out a begginers guide on one of our favourite wallets Metamask <a href="https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask" target="_blank" rel="noopener noreferrer" className='font-extrabold text-zinc-200'>here</a>.</p>
                            </div>

                            <div
                                className={`${styles.flexCenter} flex-row`}
                            >
                                <div className={`${styles.flexCenter}  w-[40px] h-[40px] rounded-[100px] bg-[#323f5d]`}>
                                    <p className='font-bold text-[16px] text-white'>2</p>
                                </div>
                                <p className='flex-1 ml-[15px] text-[15px] text-[#b0b0b0] leading-[22px] font-normal text-left'><strong className='text-zinc-200'>Claim GoerliETH: </strong> Switch Metamask to the Goerli testnet network and click on the Claiming button and follow the steps. This is where you will practice without any financial risk.</p>
                            </div>

                            <div className={`${styles.flexCenter} flex-row`}>
                                <div className={`${styles.flexCenter}  w-[40px] h-[40px] rounded-[100px] bg-[#323f5d]`}>
                                    <p className='font-bold text-[16px] text-white'>3</p>
                                </div>
                                <p className='flex-1 ml-[15px] text-[15px] text-[#b0b0b0] leading-[22px] font-normal text-left'><strong className='text-zinc-200'>Mint NFT:</strong> Now you are ready to mint our testnet NFT! Click on the Mint button and follow the steps in the pop out window from Metamask and confirm the transaction.</p>
                            </div>
                            <div className={`${styles.flexCenter} flex-row`}>
                                <div className={`${styles.flexCenter}  w-[40px] h-[40px] rounded-[100px] bg-[#323f5d]`}>
                                    <p className='font-bold text-[16px] text-white'>3</p>
                                </div>
                                <p className='flex-1 ml-[15px] text-[15px] text-[#b0b0b0] leading-[22px] font-normal text-left'><strong className='text-zinc-200'>Check out your new NFT:</strong> Now you can go to OpenSea <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className='font-extrabold text-zinc-200'>here</a>, connect your wallet and on your profile in collections you can see which NFT you just minted!</p>
                            </div>

                        </div>
                    </motion.div>
                </section>
            </div>
            {/* LOADING img */}
            <div className='h-[100px] flex justify-center'>
                {supplyLoading && <Image src={loading} width={250} height={100} alt='loading' className='object-contain flex items-center justify-center scale-[1.8]' />}
            </div>


            {/* Mint Button */}
            <div className='flex gap-6 justify-center mt-10'>
                <motion.button
                    variants={fadeIn('up', 'tween', 0.1, 1)}
                    disabled={mintingLoading || mintedCount === totalCount || !address}
                    className={cn("text-[15px] font-light leading-[35px] border rounded-[6px] py-1 text-white cursor-pointer disabled:bg-slate-600", {
                        "hidden": supplyLoading
                    })}>
                    <a href="https://goerlifaucet.com/" className='py-3 px-5' target="_blank" rel="noopener noreferrer">
                        CLAIM TESTNET ETH
                    </a>
                </motion.button>
                <motion.button
                    variants={fadeIn('up', 'tween', 0.1, 1)}
                    onClick={mintNFT}
                    disabled={
                        mintingLoading || mintedCount === totalCount || !address
                    }
                    className='text-[15px] font-light leading-[35px] border rounded-[6px] text-white cursor-pointer disabled:bg-slate-600 glow-on-hover'
                >
                    {supplyLoading ? (
                        <p className='px-5'>LOADING...</p>
                    ) : mintedCount === totalCount ? (
                        <>SOLD OUT</>
                    ) : !address ? (
                        <p className='cursor-not-allowed px-5 py-1'>SIGN IN TO MINT</p>
                    ) : mintingLoading ? (
                        <>MINTING...</>
                    ) : (
                        <span className='px-5'>MINT NFT <span className='font-bold'>(0.01 ETH)</span></span>
                    )}

                </motion.button>
            </div >

        </motion.div >


    </>
}

export default Mint

