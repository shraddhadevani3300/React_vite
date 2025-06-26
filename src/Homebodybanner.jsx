const Homebodybanner = () => {
  return (
    <>
      <div className="banner_block">
        <div className="banner_col">
  <div classname="image">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    {/* Wrapper for slides */}
    <div className="carousel-inner">
      <div className="item active">
        <img src="./banner.jpg" alt="Los Angeles" style={{width: '100%'}} />
        <div class="carousel-caption text-left">
          <h2>Delicious Juice</h2>
          <p>Get Upto 20% OFF</p>
          <a href="#" className="primary">Shop Now</a>
        </div>
      </div>
      <div className="item">
        <img src="./banner2.jpg" alt="Chicago" style={{width: '100%'}} />
        <div class="carousel-caption text-left">
          <h2>Seasonal Vegetables</h2>
          <p>Get Upto 25% OFF</p>
        </div>
      </div>
    
    </div>
    {/* Left and right controls */}
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

          </div>
          <div className="banner_text"></div>
        </div>
   </>
    
   
  );
};

export default Homebodybanner;
