import React, { useState } from 'react';

const Information = () => {
    const [view,setView]=useState(false)
    console.log(view)
    return (
        <div className='flex justify-center items-center w-full h-[60vh]'>
             <button onClick={()=>setView(!view)}>  {view ? 'View' : 'Hide'}</button>
       
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div  class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                   
                   
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Information;