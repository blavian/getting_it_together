import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllChores } from "../../store/chore"
import{useParams} from 'react-router-dom'

const Chore = () => {
  const {childId} = useParams()
  const dispatch = useDispatch();
  const currentChore = useSelector((state) => {
    return state.chore;
  })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(fetchAllChores(childId))
  }, [dispatch]);
  return (
    <div>
      {currentChore && currentChore.map((chore)=>{
        return (
            <h1>{chore.description}</h1>
        )
      })}
    </div>
  );
};

export default Chore;
