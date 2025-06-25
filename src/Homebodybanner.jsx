const Homebodybanner = () => {
  return (
    <>
      <div className="banner_block">
        <div className="banner_col">
          <div className="image">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./public/banner.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./public/banner2.jpg" alt="Second slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="banner_text"></div>
        </div>
      </div>
    </>
  );
};

export default Homebodybanner;
