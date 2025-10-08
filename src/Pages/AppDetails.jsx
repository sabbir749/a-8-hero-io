import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import like from '../assets/icon-review.png'

const AppDetails = () => {

    const { id } = useParams()


    const { apps, loading, error } = useApps()
    const app = apps.find(a => String(a.id) === id)


    if (loading) {
        return <p>Loading....</p>
    }
    const { title, image, companyName, reviews, downloads, ratingAvg, size,description } = app


    return (

        <div>

            <div className='flex w-10/12 justify-center md:items-center flex-col md:flex-row md:gap-12 mx-auto border-b-2 py-7 border-gray-300'>
                <div className='md:w-1/5 md:bg-white p-6 rounded-lg'>
                    <img className='w-[200px] h-[200px]' src={image} alt="" />
                </div>

                <div className='w-4/5'>
                    <div className='mb-4  border-b border-gray-300 pb-4'>
                        <h1 className='font-bold text-2xl'>{title}</h1>
                        <p className='flex gap-2'>Developed by <span className='text-blue-700 font-semibold'>{companyName}</span></p>
                    </div>

                    <div className='flex gap-20'>
                        <div>
                            <img src={download} alt="" /><p className='text-gray-500 mt-1'>Downloads</p>
                            <p className='font-black text-3xl mt-1'>{downloads}M </p>
                        </div>
                        <div>
                            <img src={star} alt="" /><p className='text-gray-500 mt-1'>Average Ratings</p>
                            <p className='font-black text-3xl mt-1'>{ratingAvg} </p>
                        </div>
                        <div>
                            <img src={like} alt="" /><p className='text-gray-500 mt-1'>Total Reviews</p>
                            <p className='font-black text-3xl mt-1'>{reviews} </p>
                        </div>

                    </div>
                    <button className='btn px-7 py-6 bg-green-600 text-white mt-6'>Install Now ({size} MB)</button>
                </div>
            </div>


<div className='my-10 container mx-auto'>
    <h1 className='text-2xl font-bold'>Ratings</h1>
</div>

<div className='my-10 container mx-auto'>
    <h1 className='text-2xl font-bold mb-3'>Description</h1>
    <p className='text-gray-500'>{description}</p>
</div>

        </div>
    );
};

export default AppDetails;