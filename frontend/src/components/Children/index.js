import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSchedules } from "../../store/schedule"

const Children = () => {
  const dispatch = useDispatch();
  const currentSchedule = useSelector((state) => {
      console.log(currentSchedule)
    return state.schedule;
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(fetchAllSchedules())
  }, [dispatch]);
  return (
    <div>
      {currentSchedule && currentSchedule.map((chore)=>{
        return (
            <h1>{chore.description}</h1>
        )
      })}
    </div>
  );
};

export default Children;
