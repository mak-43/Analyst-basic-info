import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

const Information = () => {
   
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/people').then(res=>res.json()).then(data=>setInfo(data.results))
    },[])

    console.log(info)
    return (
        <div className=' '>
            <div className='mx-auto w-full text-center'>
                {
                    info?.map((i,index)=><InfoCard
                        key={index}
                        data={i}
                    ></InfoCard>)
                }
            </div>
          
         
    
        </div>
    );
};

export default Information;