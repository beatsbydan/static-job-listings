import { useEffect, useState } from 'react';
import MyJob from '../MyJob/MyJob';
import ShowFilter from '../ShowFilter/ShowFilter';
import './ShowJobs.css'
const ShowJobs = () => {
    const [jobs, setJobs] = useState([])
    const [filters, setFilters] = useState([])
    const [shown, setShown] = useState(false)
    const getJobs = () => {
        fetch('./data.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setJobs(data)
        })
    }
    const handleClick = (filter) =>{
        if(filters.includes(filter)){
            return;
        }
        setFilters([...filters, filter])
        console.log(filters)
        // filterJobs(jobs)
        setShown(true);
    }
    // const filterJobs = (job) => {
    //     return jobs.filter(job=>{
    //         return filters.every(filter=>{
                
    //         })
    //     })
    // }
    const clearFilters = () => {
        setFilters([]);
        setShown(false);
    }
    const deleteFilter = (filter) => {
        filters.splice((filters.indexOf(filter)),1)
        setFilters(filters)
        if(filters.length === 0){
            setShown(false);
        }
    }
    useEffect(()=>{
        getJobs()
    },[])
    return ( 
        <div className="showJobs">
            {shown&&<ShowFilter filters={filters} clearFilters={()=>clearFilters} removeFilter={()=>deleteFilter}/>}
            {jobs.map(job=>{
                return(
                    <MyJob key={job.id} dev={job} handleClick={()=>handleClick()}/>
                )
            })}
        </div>
    );
}
 
export default ShowJobs;