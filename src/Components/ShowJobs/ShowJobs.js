import { useEffect, useState } from 'react';
import MyJob from '../MyJob/MyJob';
import ShowFilter from '../ShowFilter/ShowFilter'
import './ShowJobs.css'
const ShowJobs = () => {
    const [jobs, setJobs] = useState([])
    const [filters, setFilters] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])
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
    const filterJobs = (key, filter) => {
        for(let i = 0; i<filters.length; i++){
            if(key === "languages" || key === "tools"){
                for(let k in filters[i]){
                    if(k === key){
                        for(let j = 0; j <filters[i][k].length; j++){
                            if(filters[i][key][j] === filter){
                                return
                            }
                        }
                    }
                }
            }
            if(filters[i][key] === filter){
                return
            }
        }
        if(key === "languages" || key === "tools"){
            setFilters([...filters, {[key]:[filter]}])
        }
        else{
            setFilters([...filters, {[key]: filter}])
        }
        setShown(true)
    }
    const clearFilters = () => {
        setFilters([]);
        setShown(false);
    }
    const deleteFilter = (filter) => {
        let itemsLeft = filters.filter((key,ele)=>{
            return ele !== filter;
        })
        setFilters(itemsLeft);
        if(filters.length  < 2){
            setShown(false);
        }
    }
    useEffect(()=>{
        const filteredJobs = jobs.filter(job=>{
            return filters.every(filter=>{
                const [key, val] = Object.entries(filter)[0]
                if(key === "languages" || key === "tools"){
                    return job[key].some(obj=>{
                        return obj.includes(val)
                    })
                }
                else{
                    return job[key] === val;
                }
            })
        })
        setFilteredJobs(filteredJobs)
        getJobs()
    },[filters, jobs])
    return ( 
        <div className="showJobs">
                {shown&&<ShowFilter filters={filters} clearFilters={()=>clearFilters} removeFilter={deleteFilter}/>}            <div className="job">
                {filteredJobs.map(job=>{
                    return(
                        <MyJob key={job.id} dev={job} filterJobs={filterJobs}/>
                    )
                })}
            </div>
        </div>
    );
}
 
export default ShowJobs;