const Homebody_img=({img,text,offer})=>{
    return(
        <>
        <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src={img} alt="img" />
                    </a>
                  </div>
                  <div className="text">
                    <h3>{text}</h3>
                    <p>{offer}</p>
                  </div>
                </div>
        </>
    )
}

export default Homebody_img;