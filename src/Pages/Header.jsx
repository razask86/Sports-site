import React from 'react';
import logo from './../assets/Images/logo.png'
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between items-center mt-3'>
            <img src={logo} className='w-[180px]' />
            <ul className='hidden md:flex gap-4 md:gap-14 -ml-[180px]'>
                <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/')}>Home</li>
                <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/about')}>About Us</li>
                <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/contact')}>Contact Us</li>
            </ul>
            <div className=""></div>
        </div>
    )
}
