import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllChores } from "../../store/chore"
import{useParams} from 'react-router-dom'
import './chore.css'

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
      <p className="child"> Chores </p>
      {currentChore &&
        currentChore.map((chore) => {
          return(
            <>
            <div className= "card">
              <div className ='name'>
                    <h1>{chore.description}</h1>
                    <h2>{chore.frequency}</h2>
              </div>
            </div>
                </>
          )
            
        })}
    </div>
  );
};

export default Chore;
