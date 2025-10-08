import React from 'react';
import playStore from '../assets/fi_16076057.png'
import appStore from '../assets/Group.png'
import { Link, useLoaderData } from 'react-router';
import iphone from '../assets/Iphone.png'
import ellipse1 from '../assets/Ellipse 24.png'
import ellipse2 from '../assets/Ellipse 25.png'
import ellipse3 from '../assets/Ellipse 26.png'
import ellipse4 from '../assets/Ellipse 27.png'
import ellipse5 from '../assets/Ellipse 28.png'
import ellipse6 from '../assets/Ellipse 29.png'

import Apps from './Apps';
import useApps from '../hooks/useApps';



const Home = () => {

    const { apps, loading, error } = useApps();
    // console.log(apps);



    const allApps = apps.slice(0, 8)



    return (
        <div>
            <div className='my-8'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-[70px] flex justify-center items-center flex-col leading-[75px] font-bold'>
                        <p>We Build</p>
                        <p className='text-center'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>Productive</span> Apps</p>
                    </div>
                    <p className='text-gray-500 mt-5 max-w-[800px] text-center mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='mb-10'>
                        <Link to='https://play.google.com/store/games?hl=en' className='btn border-gray-400 py-6 px-5'>
                            <img src={playStore} alt="" />
                            Google Play</Link>
                        <Link to='https://www.apple.com/app-store/' className='btn border-gray-400 px-5 py-6 ml-4'>
                            <img src={appStore} alt="" />
                            App Store</Link>
                    </div>
                    <div className='flex justify-center items-center gap-9'>
                        <div className='hidden md:block'>
                            <img src={ellipse1} alt="" />
                            <img className='relative right-12 top-10' src={ellipse2} alt="" />
                            <img className='relative right-20 top-20' src={ellipse3} alt="" />

                        </div>
                        <div><img src={iphone} alt="" /></div>
                        <div className='hidden md:block'>
                            <img src={ellipse4} alt="" />
                            <img className='relative left-12 top-10' src={ellipse5} alt="" />
                            <img className='relative left-20 top-20' src={ellipse6} alt="" />
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#47229e] to-[#9F62F2] text-white w-full text-center py-14 mb-[80px]'>
                        <div className=''>
                            <h1 className='text-[45px] font-semibold'>Trusted by Millions, Built for You</h1>
                            <div className='flex justify-center gap-7 md:gap-33 flex-col md:flex-row mt-10'>
                                <div>
                                    <p>Total Downloads</p>
                                    <h2 className='font-black text-[62px]'>29.6M</h2>
                                    <p>21% more than last month</p>
                                </div>
                                <div>
                                    <p>Total Reviews</p>
                                    <h2 className='font-black text-[62px]'>906K</h2>
                                    <p>46% more than last month</p>
                                </div>
                                <div>
                                    <p>Active Apps</p>
                                    <h2 className='font-black text-[62px]'>132+</h2>
                                    <p>31 more will Launch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trending Apps ||  Dynamic part */}
                    <div className='px-6 container'>
                        <div className='text-center mb-[40px]'>
                            <h1 className='font-semibold text-[48px]'>Trending Apps</h1>
                            <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                        </div>
                        {/* Dynamic part */}
                        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>

                            {
                                allApps.map(appData => <Apps appData={appData} key={appData.id}></Apps>)
                            }
                        </div>
                        <div className='text-center mt-15 mx-auto'>
                            <Link to='/all-apps' className='btn mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7'>Show All</Link>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Home;