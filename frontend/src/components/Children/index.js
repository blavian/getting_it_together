import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSchedules } from "../../store/schedule"
import{useParams} from 'react-router-dom'

const Children = () => {
  const {childId} = useParams()
  const dispatch = useDispatch();
  const currentSchedule = useSelector((state) => {
    return state.schedule;
  })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(fetchAllSchedules(childId))
  }, [dispatch]);
  return (
    <div>
      {currentSchedule && currentSchedule.map((schedule)=>{
        return (
            <h1>{schedule.description}</h1>
        )
      })}
    </div>
  );
};

export default Children;
