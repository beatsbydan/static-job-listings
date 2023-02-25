import './ShowFilter.css'
import close from '../../images/icon-remove.svg'
const ShowFilter = ({filters, clearFilters, removeFilter}) => {
    return ( 
        <div className="showFilter">
            <div className="filters">
                {filters.map((key, filter)=>{
                    let myKey = Object.keys(key)[0]
                    return(
                        <div className='filterButton'>
                            <button className='filter'>{key[myKey]}</button>
                            <button className='close' onClick={()=>removeFilter(filter)}><img src={close} alt="" /></button>
                        </div>
                    )
                })}
            </div>
            {filters.length !== 0 &&<button onClick={clearFilters()}  className='clear'>Clear</button>}
        </div>
     );
}
 
export default ShowFilter;