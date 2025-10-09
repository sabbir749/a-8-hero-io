import React, { useState, useEffect } from 'react';
import useApps from '../hooks/useApps';
import Apps from './Apps';
import AppsError from './AppsError';
import Loader from '../components/Loader';

const AllApps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const [searchedApps, setSearchedApps] = useState([]);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        setSearchedApps(apps);
    }, [apps]);

    useEffect(() => {
        if (!apps) return;

        setSearching(true); 

       
        const timeout = setTimeout(() => {
            const term = search.trim().toLowerCase();
            if (term === '') {
                setSearchedApps(apps);
            } else {
                const filtered = apps.filter(app =>
                    app.title.toLowerCase().includes(term)
                );
                setSearchedApps(filtered);
            }
            setSearching(false);
        }, 200); 

        return () => clearTimeout(timeout);
    }, [search, apps]);

    return (
        <div className='container px-9 mx-auto'>
            <div className='flex justify-center items-center flex-col text-center mb-10'>
                <h1 className='font-bold text-[43px]'>Our All Applications</h1>
                <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-center items-center gap-3 md:justify-between mb-5 flex-col md:flex-row'>
                <p className='font-bold text-xl'>({searchedApps.length}) Apps Found</p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        type="search" 
                        required 
                        placeholder="Search Apps" 
                    />
                </label>
            </div>

            {loading || searching ? (
                <Loader />
            ) : (
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {searchedApps.length > 0 ? (
                        searchedApps.map(appData => (
                            <Apps appData={appData} key={appData.id} />
                        ))
                    ) : (
                        <div className='col-span-4'>
                            <AppsError />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllApps;
