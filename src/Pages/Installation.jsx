import React, { useEffect, useState } from 'react';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'

const Installation = () => {

    const [installedAppsList, setInstalledAppsList] = useState([])
    const [sortApps, setSortApps] = useState('none')

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('InstalledApps'))
        if (savedList) {
            setInstalledAppsList(savedList)
        }
    }, [])

    const sortedItem = () => {
        if (sortApps === 'size-asc') {
            return [...installedAppsList].sort((a, b) => a.size - b.size)
        } else if (sortApps === 'size-desc') {
            return [...installedAppsList].sort((a, b) => b.size - a.size)
        } else {
            return installedAppsList
        }
    }


    const handleRemove = (id) => {

        const existingApps = JSON.parse(localStorage.getItem('InstalledApps'))
        let updatedList = existingApps.filter(p => p.id !== id)

        setInstalledAppsList(updatedList)

        localStorage.setItem('InstalledApps', JSON.stringify(updatedList))

    }



    return (
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[43px] font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-center w-full px-3 flex-col md:flex-row items-center md:justify-between gap-3 my-6'>
                    <p className='font-bold text-xl'>({installedAppsList.length}) Apps Found</p>
                    <select value={sortApps} onChange={e => setSortApps(e.target.value)} className="select">
                        <option disabled={true} value='none'>Sort by Size</option>
                        <option value='size-asc'>Low-High</option>
                        <option value='size-desc'>High-Low</option>


                    </select>
                </div>
            </div>

            {/* Dynamic part */}



            {
                sortedItem().map(apps => <div key={apps.id} className='flex justify-between items-center mx-3 rounded-lg mb-3 bg-white p-4'>
                    <div className='flex gap-4'>
                        <div className='bg-gray-200 rounded-lg p-3 w-[100px]'>
                            <img className='w-full' src={apps.image} alt="" />
                        </div>
                        <div className='flex  justify-center flex-col'>
                            <h3 className='font-semibold text-lg'>{apps.title}</h3>
                            <div className='flex gap-5 mt-4 text-gray-400'>
                                <div className='flex gap-2 items-center'><img className='w-[17px]' src={download} alt="" /><p>{apps.downloads}M</p></div>
                                <div className='flex gap-2 items-center'><img className='w-[17px]' src={star} alt="" /><p className='text-orange-600'>{apps.ratingAvg}</p></div>
                                <div className='flex gap-2 items-center'><p>{apps.size} MB</p></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleRemove(apps.id)} className='btn bg-green-600 text-white'>Uninstall</button>
                    </div>
                </div>)
            }


        </div>
    );
};

export default Installation;