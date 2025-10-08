import React from 'react';
import error from '../assets/App-Error.png'
import { Link } from 'react-router';

const AppsError = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={error} alt="" />
            <h1 className='text-3xl font-bold mt-7'> No Apps Found</h1>
            <Link to='/all-apps' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 mt-4'>View All Apps</Link>
        </div>
    );
};

export default AppsError;