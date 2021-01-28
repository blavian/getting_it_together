import "./index.css"
import homePic from "./rachel-o3tIY5pIork-unsplash.jpg";
import {useSelector} from 'react-redux'

const Home = ()=>{
    const sessionUser = useSelector((state) => state.session.user);
    if(sessionUser){

        return (
          <div className="container">
           <h1> add a child</h1>
          </div>
        );
    } else{
        return (
          <div className="container">
            <h1>
              Welcome to Getting it together! If you are struggling with
              managing your kids virtual schedules,this is the place for you.
            </h1>
          </div>
        ); 
    }
    }



export default Home
