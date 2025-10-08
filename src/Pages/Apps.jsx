import React from 'react';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import { Link } from 'react-router';

// {
//     "image": "https://example.com/app1.png",
//     "title": "Chatly",
//     "companyName": "TechNest Inc.",
//     "id": 1,
//     "description": "A smart messaging app with AI-powered suggestions and end-to-end encryption.",
//     "size": 48,
//     "reviews": 12034,
//     "ratingAvg": 4.6,
//     "downloads": 5000000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 456
//         },
//         {
//             "name": "2 star",
//             "count": 789
//         },
//         {
//             "name": "3 star",
//             "count": 1345
//         },
//         {
//             "name": "4 star",
//             "count": 3456
//         },
//         {
//             "name": "5 star",
//             "count": 5988
//         }
//     ]
// }

const Apps = ({ appData }) => {

    const { id, title, image, downloads, ratingAvg, companyName } = appData

    return (

        <Link to={`/app/${id}`} className='bg-white shadow-xl rounded-lg p-4 hover:scale-102 transition ease-in-out hover:shadow-2xl'>
            <div className='bg-gray-200 p-5 rounded-lg mb-4'><img className='mx-auto p-4 w-[170px] h-[170px] rounded-full' src={image} alt="" /></div>
            <h1 className='mt-1 font-semibold'>{title}: {companyName}</h1>
            <div className='flex justify-between items-center mt-2 p-4'>
                <p className='flex items-center justify-center gap-2 text-green-600'><img className='w-[16px]' src={download} alt="" />{downloads}M</p>
                <p className='flex items-center justify-center gap-2 text-orange-700'><img className='w-[16px]' src={star} alt="" />{ratingAvg}</p>
            </div>
        </Link>
    );
};

export default Apps;