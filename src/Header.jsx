import Homebody from "./Homebody";
import { IoMdArrowDropdown } from "react-icons/io";

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
                  <a href="#">Home</a>
                </li>
                <li className="menu-item-shop">
                  <a href="#">Shop <IoMdArrowDropdown /></a>
                  <ul className="sub_menu">
                    <li> <a href="#"> Fashion</a></li>
                    <li> <a href="#"> Jewellery</a></li>
                    <li> <a href="#"> Furniture</a></li>
                    <li> <a href="#"> Autoparts</a></li>
                  </ul>
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
        </>
    )
}
export default Header;