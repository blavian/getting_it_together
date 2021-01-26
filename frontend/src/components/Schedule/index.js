import{useEffect, useState} from 'react'
import {fetch} from '../../store/csrf'

const Schedule = ()=>{
  const[currentSchedule,setSchedule] = useState([])
  
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(async() => {
       const response = await fetch('/api/schedule')
       setSchedule(response.data.schedule)
   }, []);
    return(
        <div className="container">
        <h1> Children</h1>
        {!currentSchedule && <h1> Add child</h1>}
        {currentSchedule && currentSchedule.map(child=>{
          return <h1>{child.name}</h1>
        })}
        </div>

    )
}

export default Schedule