import Homebody from "./Homebody";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <div className="main_header">
          <div className="header_top">
            <div className="container">
              <div className="top_inner">
                <div className="nav-left">
                  <div className="currency">
                    <span>USD $</span>
                  </div>
                  <div className="language">
                    <span>English</span>
                  </div>
                </div>
                <div className="nav-right">
                  <div className="uaccount">
                    <ul className="user_info">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <ul className="header_inner">
                <li>
                  <Link to="/" >Home </Link>
                  {/* <a href="#">Home</a> */}
                </li>
                <li className="menu-item-shop">
                  <Link to="shop">Shop <IoMdArrowDropdown /></Link>
                  <ul className="sub_menu">
                    <li> <a href="#"> Fashion</a></li>
                    <li> <a href="#"> Jewellery</a></li>
                    <li> <a href="#"> Furniture</a></li>
                    <li> <a href="#"> Autoparts</a></li>
                  </ul>
                </li>
                <li>
                  <Link to="Electronics">Electronics</Link>
                </li>
                <li>
                  <Link to="Contactus">Contact US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
    )
}
export default Header;