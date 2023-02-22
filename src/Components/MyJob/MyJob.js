import './MyJob.css'
const MyJob = ({dev, handleClick}) => {
    return (
        <div className={dev.id===1||dev.id===2?"myJob featuredDev flex":"myJob flex"} key={dev.id}>
            <div className="devProfile">
                <img src={dev.logo} alt="" />
                <div className="devTitle">
                    <div className="devCompany">
                        <p className='compText'>{dev.company}</p>
                        {dev.new&&<div className='new'>
                            <p>NEW!</p>
                        </div>}
                        {dev.featured&&<div className='featured'>
                                <p>FEATURED</p>
                            </div>}
                    </div>
                    <div className="devSpec">
                        <h3>{dev.position}</h3>
                    </div>
                    <div className="devStats">
                        <p>{dev.postedAt}</p>
                        <span className="point">&#8226;</span>
                        <p>{dev.contract}</p>
                        <span className="point">&#8226;</span>
                        <p>{dev.location}</p>
                    </div>
                </div>
            </div>
            <div className="devFilter">
                <button onClick={()=>handleClick(dev.role)}>{dev.role}</button>
                <button onClick={()=>handleClick(dev.role)}>{dev.level}</button>
                {dev.languages.map(lang=>{
                    return(
                        <button onClick={()=>handleClick(lang)}>{lang}</button>
                    ) 
                })}
                {dev.tools.map(tool=>{
                    return(
                        <button onClick={()=>handleClick(tool)}>{tool}</button>
                    )
                })}
            </div>
        </div>
      );
}
 
export default MyJob;