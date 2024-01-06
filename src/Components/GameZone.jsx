import React from 'react'
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ellipse from '../assets/Ellipse1.png';
import vectorBlue from '../assets/vectorBlue.png';
import vectorYellow from '../assets/vectorYellow.png';
import vectorgrey from '../assets/vectorGrey.png';
import vectorblack from '../assets/vectorBlack.png';
import { ImCross } from "react-icons/im";
import { LuRefreshCcw } from "react-icons/lu";

const GameZone = () => {
    return (
        <div className='max-w-screen h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center h-screen relative'>
                <div className='w-60 h-60 bg-[#192A32] -ml-10 rounded-xl absolute  top-[60%] left-[-70%] flex  flex-col text-center p-4'>
                    <h1 className='mb-5  text-3xl font-bold text-[#31C4BE]'>Quote #1</h1>
                    <p className='text-xl font-sm text-[#F2B237]'>"It's is better to fail originally than to succeed in imitation"</p>
                    <div className='flex justify-center mt-8'><img src={Ellipse} alt="Ellipse" className='w-7' /></div>
                </div>
                <div className='w-[416px] h-[748px] bg-[#192A32] rounded-3xl flex flex-wrap justify-center items-center gap-14'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={vectorBlue} alt="" />
                        <img src={vectorYellow} alt="" />
                    </div>
                    <div>
                        <Link to="/"> <button className='flex justify-center items-center p-1.5 rounded-md gap-1 text-[#d9d9d9] text-sm font-md w-[86px] h-[39] bg-[#1F3540]'> <ImCross size={15} color='#d9d9d9' /> Turn</button></Link>
                    </div>
                    <div>
                        <button className='w-[32px] h-[31px] bg-[#A7BDC8] p-1 rounded-md flex justify-center items-center'>
                            <LuRefreshCcw size={15} />
                        </button>
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-10 '>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                        <div className='w-[86px] h-[86px] bg-[#1F3540] rounded-md shadow-md '>

                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <button className='w-[86px] h-[49px] bg-[#31C4BE] rounded-md flex flex-col justify-center items-center text-md font-bold'>
                            <span className='font-semibold'>X (YOU)</span>
                            0
                        </button>
                        <button className='w-[86px] h-[49px] bg-[#A8BEC9] rounded-md flex flex-col justify-center items-center text-md font-bold'>
                            <span className='font-semibold'>TIE</span>
                            0
                        </button>
                        <button className='w-[86px] h-[49px] bg-[#F2B237] rounded-md flex flex-col justify-center items-center text-md font-bold'>
                            <span className='font-semibold'>O (CPU)</span>
                            0
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameZone