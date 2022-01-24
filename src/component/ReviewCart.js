import React, { useState } from 'react'

export default function ReviewCart({currentUser}) {
    const [state, setstate] = useState(false);
    const imageUrl = 'https://st.depositphotos.com/1186033/4211/i/950/depositphotos_42113795-stock-photo-review.jpg';
    
    const body = currentUser[0]===undefined ? '': currentUser[0].body ;
    const strBody = body.substring(0,15);
    console.log(strBody);
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl hover:shadow-xl  duration-500 shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageUrl} alt="Man looking at item at a store"/>
                </div>
                <div className="mt-2"></div>
                <div className="p-8">
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Post Id : {currentUser[0]?.id}</div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{currentUser[0]?.name}</div>
                <div className="tracking-wide text-sm text-indigo-800 font-semibold">Email : {currentUser[0]?.email}</div>
                <p className="mt-2 text-gray-500"> {currentUser[0]?.body.substring(0,150)}</p>
                </div>
            </div>
            <br/>
        </div>
    )
}
