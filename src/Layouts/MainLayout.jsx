import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen poppins'>
            <Navbar></Navbar>
            <div className='flex-1 bg-[#f1f5e8] py-[40px]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;