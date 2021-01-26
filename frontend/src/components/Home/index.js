import "./index.css"
import homePic from "./rachel-o3tIY5pIork-unsplash.jpg";

const Home = ()=>{
    
    return (
        <div className="container">
    <img  src={homePic} alt="pic" />
        <h1 className="centered"> Welcome to Getting it together!
       If you are struggling with managing your kids virtual schedules,this is the place for you.</h1>
    </div>
);
}



export default Home
