import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

const Information = () => {

    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('https://swapi.dev/api/people').then(res => res.json()).then(data => setInfo(data.results))
    }, [])

    console.log(info)
    return (
        <div className='bg-slate-100 pt-5'>
            <div className='grid grid-cols-1 gap-5'>
                {
                    info?.map((i, index) => <InfoCard
                        key={index}
                        data={i}
                    ></InfoCard>)
                }
            </div>


            <div class="btn-group flex justify-center my-5">
                <button class="btn">«</button>
                
                <button class="btn">Page 22</button>
                <button class="btn">»</button>
            </div>
        </div>
    );
};

export default Information;