import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TestComponent from './TestComponent'
import { useAddress, ConnectWallet, useSDK } from '@thirdweb-dev/react'
import anime from './imgs/anime.jpeg'
import { BigNumber, ethers } from 'ethers'
import { ContractTestABI, WETHaddress } from './contract_abis/ContractTest'
const Home = () => {
    let address: string| undefined = useAddress()
    const sdk = useSDK()
    const provider = sdk?.getProvider();
    const signer = sdk?.getSigner();
    const contract : ethers.Contract = new ethers.Contract(WETHaddress,ContractTestABI,signer)

    async function fetch_weth_total_supply() : Promise<number>{ 
        let total_supply: number = await contract.totalSupply().then((res:BigNumber)=>{
            return(parseFloat(ethers.utils.formatEther(res)))
        })
        console.log(`Total Supply : ${total_supply}`)
        return(total_supply)
    }

    useEffect(()=>{
        fetch_weth_total_supply()
    },[])
    return (
        <>

            <div className='flex w-full justify-start pl-[4rem] pt-[4rem] items-center'>
                <ConnectWallet/>
                {address &&
                
                    <img src={anime} className='rounded-[100%] ml-2 h-[2.5rem] w-[2.5rem] border-[1px] border-[#fffff2a]'/>
                }
            </div>
            <div>Main Page</div>

            <div>
                <Link to="/TestRedux" className=' bg-red-500'>Test Redux</Link>
            </div>
            <div>
                <Link to="/TestID/4" className=' bg-green-500'>Test Router with ID</Link>
            </div>
        </>
    )
}

export default Home