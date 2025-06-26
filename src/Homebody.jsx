import Homebodybanner from "./Homebodybanner";
const Homebody=()=>{
    return(
        <>
        <div className="main_body">
          <Homebodybanner/>

          {/* -----------------Static Section--------------- */}
          <div className="static_section padding">
            <div className="container">
              <div className="service_inner">
                <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src="./adv1.png" alt="img" />
                    </a>
                  </div>
                  <div className="text">
                    <h3>Fresh Fruits</h3>
                    <p>Up to 30% off</p>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src="./adv3.png" alt="img" />
                    </a>
                  </div>
                  <div className="text">
                    <h3>Dry Fruits</h3>
                    <p>Up to 30% off</p>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src="./adv2.png" alt="img" />
                    </a>
                  </div>
                  <div className="text">
                    <h3>Pure Honey</h3>
                    <p>Up to 30% off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------Static Section--------------- */}

        </div>
        </>
    )
}

export default Homebody;