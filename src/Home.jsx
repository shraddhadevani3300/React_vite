import Header from "./Header";
import Homebody from "./Homebody";
// import Rating from "./Rating";

const Home=()=>{
    return(
        <>
        <div className="home-page">
        <Header/>
        <Homebody/>
        {/* <Rating/> */}
        <div className="main-footer"></div>
      </div>
        </>
    )
}
export default Home;