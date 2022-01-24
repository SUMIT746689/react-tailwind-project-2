import React, { useEffect, useState } from 'react'
import ReviewCart from './ReviewCart';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';

export default function Review() {
    const [data,setData] = useState([]);
    const [id,setId] = useState(1);


    const fetchdata = ()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(dat=>{
            const cutItems  = dat.filter(val=>val.id<10);
            setData(cutItems);
        });
       
    }
    useEffect(() => {
        async function value (){
            await fetchdata();
        }
        value();
    }, []) ;
    
    console.log(data);
    const clickRight=()=>{
        setId(data.length === id ? 1 : id+1 );  
    }
    const clickLeft=()=>{
        setId(id <= 1 ? data.length : id-1);
          
    }
    console.log(id)

    const currentUser = data.filter((d)=>d.id===id);
    console.log(currentUser)

    return (
        <div>
            <div>
                <h3 className="text-indigo-600 text-3xl font-medium mb-2">More Reviews</h3>
                <div className="bg-indigo-500 border-separate border-indigo-300 border-b-4 w-32 m-auto pt-1"></div>
            </div>
            <br/>
            
            <div className='flex flex-col justify-around align-middle w-100 '>
                
                <AiOutlineDoubleLeft onClick={clickLeft} className='m-auto text-5xl text-indigo-600 absolute left-5 bg-white p-2 rounded-md duration-500 shadow-md hover:shadow-xl'/>
                   
                    <div className=' w-100'>
                       
                        <ReviewCart currentUser={currentUser} />
                    </div>
                   
                <AiOutlineDoubleRight onClick={clickRight} className='text-5xl text-indigo-600 absolute right-5 bg-white p-2 rounded-md duration-500 shadow-md hover:shadow-xl'/>
            
            </div>
            <div  className='lg:w-100 w-100 bg-purple-50 grid md:grid-cols-2 lg:grid-cols-3 gap-1'>
            </div>
        </div>
        
    )
}
