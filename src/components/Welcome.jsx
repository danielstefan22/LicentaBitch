import {AiFillPlayCircle} from 'react-icons/ai';
import React,{useContext} from 'react';
import {SiEthereum} from 'react-icons/si';

import {BsInfoCircle} from 'react-icons/bs';

import { TransactionContext } from '../context/Transactions context';
import {Loader} from './';
const Input=({placeholder,name,type,value,handleChange}) =>{
    <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e)=>handleChange(e, name)}
    
    />
}
const handleSubmit=()=>{

}
const commonStyles='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
    const{connectWallet,currentAccount}=useContext(TransactionContext);

const handleSubmit=() => {
        
    }
    return(
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4 '>
                <div className='flex flex-1 justify-start flex-col mf:mr-10 md:ml-40'>
                <h1 className='text-5xl sm-text-5xl text-white text-gradient py-2'>
                    Send crypto <br /> anywhere
                    </h1>
                    <p className='text-left mt-4 text-white font-light md:w-9/12 w-11/12 text-base '>
                        Engage with crypto,Buy and sell crypto on Scrypt
                    </p>
                    { !currentAccount && (
                <button type="button"
                onClick={connectWallet} 
                className='flex flex-row hover:border-transparent border justify-center items-center my-8 p-3 border-blue-500 rounded-full cursor-pointer '>
                   <p className='text-white text-base font-semibold'>Connect wallet</p> 
                </button>)}
                <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                <div className={`rounded-tl-2xl ${commonStyles}`}>
                Ease of use
                </div>
                <div className={commonStyles}>Security </div>
                <div className={`rounded-tr-2xl ${commonStyles}`}>
                Ethereum
                </div>
                <div className={`rounded-bl-2xl ${commonStyles}`}>
                Web 3.0
                </div>
                <div className={commonStyles}>Fast </div>
                <div className={`rounded-br-2xl ${commonStyles}`}>
                Blockchain
                </div>
                </div> 
                </div>
                
            </div>
            <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism'>
                <div className='flex justify-between flex-col w-full h-full'>
                <div className='flex justify-between items-center'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
                </div>
                <div>
                    <p className='text-white font-light text-sm'>
                    Address
                    </p>
                    <p className='text-white font-semibold text-lg mt-1'>
                    Ethereum
                    </p>
                </div>
                
                </div>
                
                </div>
                <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                <input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" />
                <input placeholder="Amount of ETH" name="amount" type="number" handleChange={()=>{}}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" />
                <input placeholder="Send GIF" name="keyword" type="text" handleChange={()=>{}}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" />
                <input placeholder="Enter Message" name="message" type="text" handleChange={()=>{}}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" />
                <div className='h-[1px] w-full bg-gray-300 my-2'/>
                {false ? (
                    <Loader />
                ) : (
                    <button 
                    type='button'
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3df47c] rounded-full hover:border-transparent cursor-pointer ">
                        Send now
                        </button>
                )}
                </div>
                </div>
                
        </div>
    );

}
export default Welcome;