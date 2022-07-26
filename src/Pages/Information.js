import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import InfoCard from './InfoCard';
import './Information.css'

const Information = () => {

    const [info, setInfo] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage, setDataPerPage] = useState(3)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://swapi.dev/api/people').then(res => res.json()).then(data => {
            setInfo(data.results)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <Loading />
    }

    const iLastPost = currentPage * dataPerPage;
    const iFirstPost = iLastPost - dataPerPage
    const currentPosts = info?.slice(iFirstPost, iLastPost)
  
    return (
        <div className='bg-slate-100 pt-5 '>
            <div className='grid grid-cols-1 gap-5'>
                {
                    currentPosts?.map((i, index) => <InfoCard
                        key={index}
                        data={i}
                    ></InfoCard>)
                }
            </div>



            <div class="pagination text-center  flex justify-center py-5">
                {
                    [...Array(Math.ceil((info?.length)/dataPerPage)).keys()].map(number => <button
                        onClick={() => setCurrentPage(number + 1)}
                        className={currentPage == number + 1 ? 'selected px-2 rounded' : 'px-2 rounded'}
                    >{number + 1}</button>)
                }
                <select className='ms-2  ' onChange={e => setDataPerPage(e.target.value)}>
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                 
                </select>
            </div>
        </div>
    );
};

export default Information;