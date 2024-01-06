import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ellipse from '../assets/Ellipse1.png';
import vectorBlue from '../assets/vectorBlue.png';
import vectorYellow from '../assets/vectorYellow.png';
import vectorgrey from '../assets/vectorGrey.png';
import vectorblack from '../assets/vectorBlack.png';

const Home = (player) => {
    const moves = ["x", "O"]
    const computerMove = moves[Math.floor(Math.random() * 2)]
    let playerMove = localStorage.setItem('playerMove', player)
    let computer = localStorage.setItem('computer', computerMove)


    const [Invite, setInvite] = useState(false)
    const handlerClick = () => {
        setInvite(true);

        setTimeout(() => {
            setInvite(false);
        }, 3000)
    }
    return (
        <div className='max-w-screen h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center h-screen gap-10 px-5 py-10 relative'>
                <div className='w-60 h-60 bg-[#192A32] ml-10 rounded-xl absolute  top-[60%] left-[-70%] flex  flex-col text-center p-4'>
                    <h1 className='mb-5  text-3xl font-bold text-[#31C4BE]'>Quote #1</h1>
                    <p className='text-xl font-sm text-[#F2B237]'>"It's is better to fail originally than to succeed in imitation"</p>
                    <div className='flex justify-center mt-8'><img src={Ellipse} alt="Ellipse" className='w-7' /></div>
                </div>
                <div className={`absolute top-[5%] left-[210%] ${Invite ? 'block' : 'hidden'}`}>
                    <div className='w-[220px] h-[41px] bg-[#192A32] rounded-md flex justify-center items-center'>
                        <h5 className='font-bold text-1xl text-[#F2B237]'>Invite link copied</h5>
                    </div>
                </div>
                <div className='w-[416px] h-[748px] bg-[#192A32] rounded-3xl flex justify-center items-center flex-col gap-7'>
                    <div className='flex gap-3'>
                        <img src={vectorBlue} alt="BlueX" className='w-7 h-7' />
                        <img src={vectorYellow} alt="YellowO" className='w-7 h-7' />
                    </div>
                    <div className='w-[307px] h-[154px] bg-[#1F3540] rounded-md p-4 flex flex-col gap-3'>
                        <h4 className='text-white font-sm text-center text-2xl font-custom'>PICK PLAYER</h4>
                        <div className='w-[276px] h-[45px] rounded-md bg-[#192A32] p-2 flex justify-between'>
                            <Link to="/GameZone" className='w-1/2 flex justify-center'><div > <img src={vectorgrey} alt="" className='w-6 h-6' /> </div></Link>
                            <Link to="/GameZone" className='w-1/2  bg-[#D9D9D9] flex justify-center items-center rounded-sm'> <div ><img src={vectorblack} alt="" className='w-6 h-6 ' /></div></Link>
                        </div>
                    </div>

                    <div>
                        <div className='w-[307px] h-[40px] bg-[#F2B237] mb-5 rounded-md flex justify-center items-center'>
                            <h5 className='text-md font-bold text-[#192A32]'>New Game (Vs CPU)</h5>
                        </div>
                        <div className='w-[307px] h-[45px] bg-[#32C4C3] rounded-md flex justify-center items-center'>
                            <h5 className='text-md font-bold text-[#192A32] p-2'>New Game (Vs Human) Coming Soon</h5>
                        </div>
                    </div>

                    <div onClick={handlerClick} className='w-[225px] h-[33px] bg-[#F2B237] rounded-md flex justify-center items-center mt-10'>
                        <h5 className='text-md font-bold text-[#192A32]'>Invite your friend</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
