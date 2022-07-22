
import React, { useState } from 'react';

const InfoCard = ({ data }) => {
    const [view, setView] = useState(true)
    const { eye_color, name, gender, hair_color,films,homeworld,mass,skin_color } = data

    return (
        <div className='mx-auto w-full' >
            <div className='grid grid-cols-5 gap-5 ms-0 items-center text-left'>
                <div>{name}</div>
                <div>
                    <h2 className=' font-bold'>Eye color</h2>
                    <p>{eye_color}</p>
                </div>
                <div>
                    <h2 className=' font-bold'>Gender</h2>
                    <p>{gender}</p>
                </div>
                <div>
                    <h2 className=' font-bold'>Hair color</h2>
                    <p>{hair_color}</p>
                </div>
                <div>
                    <button className='font-bold' onClick={() => setView(!view)}>  {view ? 'View Details' : 'Hide Details'}</button>
                </div>
            </div>

            <div className='my-5'>
                {
                    !view && <div>
                         <h1>Description</h1>
                         <p className='flex flex-col'>{films}</p>
                         <p>{homeworld}</p>
                         <p>{mass}</p>
                         <p>{skin_color}</p>
                         </div>
                }
            </div>
        </div>
    );
};

export default InfoCard;