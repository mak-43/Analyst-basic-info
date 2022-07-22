import React, { useEffect, useState } from 'react';

const HomeWorld = ({api}) => {
    const [home, setHome] = useState({})
    useEffect(() => {
        fetch(api)
        .then(res=>res.json())
        .then(data=>setHome(data))
    }, [api])

    return (
        <div>
            <p>name: {home?.name}</p>
            <p>Rotation-period: {home?.rotation_period}</p>
            <p>orbital_period: {home?.orbital_period}</p>
            <p>diameter: {home?.diameter}</p>
            <p>climate: {home?.climate}</p>
            <p>gravity: {home?.gravity}</p>
            <p>population: {home?.population}</p>
          
        </div>
    );
};

export default HomeWorld;