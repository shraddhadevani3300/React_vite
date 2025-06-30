import Homebodybanner from "./Homebodybanner";
import Homebody_img from "./Homebody_img";
Homebody_img
const Homebody=()=>{
    return(
        <>
        <div className="main_body">
          <Homebodybanner/>

          {/* -----------------Static Section--------------- */}
          <div className="static_section padding">
            <div className="container">
              <div className="service_inner">
                <Homebody_img img="./adv1.png" text="Fresh Fruits" offer="Up to 30% off" />
                <Homebody_img img="./adv2.png" text="Pure Honey" offer="Flat 20% off" />
                <Homebody_img img="./adv3.png" text="Dry Fruits" offer="25% Discount" />

              </div>
            </div>
          </div>
          {/* -----------------Static Section--------------- */}

        </div>
        </>
    )
}

export default Homebody;