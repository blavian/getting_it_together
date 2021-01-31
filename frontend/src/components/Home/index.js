import "./index.css"
import homePic from "./rachel-o3tIY5pIork-unsplash.jpg";
import {useSelector} from 'react-redux'
import Schedule from "../Schedule"

const Home = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      <div className="container">
        <Schedule />
      </div>
    );
  } else {
    return (
      <div className="container">
        <img src={homePic} alt="pic" />
        <h1 className="text">
          Welcome to Getting it together! If you are struggling with managing
          your kids virtual schedules,this is the place for you.
        </h1>
      </div>
    );
  }
};



export default Home
