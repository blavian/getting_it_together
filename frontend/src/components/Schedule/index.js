import{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllChildren } from "../../store/children";

const Schedule = ()=>{
  const dispatch = useDispatch()
  const currentChildren = useSelector(state=>{
    return state.children
  })
  const user = useSelector(state=>{
    return state.session.user
  })
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(async() => {
       dispatch(
         fetchAllChildren(user.id)
         )
   }, [dispatch]);
   console.log(currentChildren)
    return(
        <div>
        <h1> Children</h1>
        {!currentChildren && <h1> Add child</h1>}
        {currentChildren && currentChildren.map(child=>{
          return <h1>{child.first_name}</h1>
        })}
        </div>

    )
}

export default Schedule