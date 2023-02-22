import './ShowFilter.css'
import close from '../../images/icon-remove.svg'
const ShowFilter = ({filters, clearFilters, removeFilter}) => {
    return ( 
        <div className="showFilter">
            <div className="filters">
                {filters.map((filter)=>{
                    return(
                        <div className='filterButton'>
                            <button className='filter'>{filter}</button>
                            <button className='close' onClick={removeFilter(filter)}><img src={close} alt="" /></button>
                        </div>
                    )
                })}
            </div>
            {filters.length !== 0 &&<button onClick={clearFilters()}  className='clear'>Clear</button>}
        </div>
     );
}
 
export default ShowFilter;