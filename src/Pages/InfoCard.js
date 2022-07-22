
import React, { useState } from 'react';

import HomeWorld from './HomeWorld';

const InfoCard = ({ data }) => {
    const [view, setView] = useState(true)
    const { eye_color, name, gender, hair_color, films, birth_year, homeworld, mass, skin_color, height, species, starships, vehicles } = data

    return (
        <div className='mx-auto w-full lg:px-10 md:px-5 ' >
            <div className=' px-5  ms-0 items-center text-left border border-neutral-400 rounded-xl py-10 bg-white'>
                <div className='grid grid-cols-5 items-center'>
                    <div>{name}</div>
                    <div>
                        <h2 className=' font-bold'>Height</h2>
                        <p>{height}</p>
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
                        <button className='font-bold btn ' onClick={() => setView(!view)}>  {view ? 'View Details' : 'Hide Details'}</button>
                    </div>
                </div>

                <div className='my-5'>
                    {
                        !view && <div className=' bg-white rounded-xl  border-2 border-xl'>

                            <div class="card lg:px-20 lg:mx-20 p-5">
                                <h1 className='font-semibold my-3'>Description</h1>
                                <div class="  grid grid-cols-2 ">

                                    <p><span className='font-semibold '>Birth year:</span> {birth_year}</p>

                                    <p><span className='font-semibold'>Mass:</span> {mass}</p>
                                    <p><span className='font-semibold'>Skin color:</span> {skin_color}</p>
                                    <p><span className='font-semibold'>Eye color:</span> {eye_color}</p>
                                    <p><span className='font-semibold'>Species:{species.length}</span></p>
                                    <p><span className='font-semibold'>Films:{films.length}</span></p>
                                    <p><span className='font-semibold'>Vehicles:{vehicles.length}</span></p>
                                    <p><span className='font-semibold'>Starships:{starships.length}</span></p>

                                    <p><span className='font-semibold'>Homeworld:</span> <HomeWorld api={homeworld}></HomeWorld> </p>


                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default InfoCard;