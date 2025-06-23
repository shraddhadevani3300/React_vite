const App = () => {

  // https://demo4techies.com/prestashop/grocery/en/
  return (
    <>
      <div className="home-page">
        <div className="main_header">
          <div className="header_top"></div>
          <div className="header_bottom">
            <div className="container">
              <ul className="header_inner">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Sport&Books</a>
                </li>
                <li>
                  <a href="#">Contact US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_body">
          <div className="static_section padding">
            <div className="container">
              <div className="service_inner">
                <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src="./public/adv1.png" alt="img" />
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
                      <img src="./public/adv3.png" alt="img" />
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
        </div>
        <div className="main-footer"></div>
      </div>
    </>
  );
};
export default App;
