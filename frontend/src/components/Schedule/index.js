import{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllChildren } from "../../store/children";
import './schedule.css'
import {Link} from 'react-router-dom'

const Schedule = () => {
  const dispatch = useDispatch();
  const currentChildren = useSelector((state) => {
    return state.children;
  });
  const user = useSelector((state) => {
    return state.session.user;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(fetchAllChildren(user.id));
  }, [dispatch]);
  return (
    <div>
      <p className="child"> Children </p>
      {!currentChildren && <h1> Add child</h1>}
      {currentChildren &&
        currentChildren.map((child) => {
          return (
            <>
              <Link to={`/children/${child.id}`}>
                <div className="card">
                  <div class="name">
                    <h1>{child.first_name}</h1>
                    <h2>Age:{child.age}</h2>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default Schedule