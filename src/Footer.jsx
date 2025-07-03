import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="footer_top padding">
        <div className="container">
          <div className="subscrib">
            <MdOutlineMarkEmailRead />
            <h2>Subscribe to our newsletter</h2>
          </div>
        </div>
      </div>
      <div className="footer_bottom padding">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-col">
              <div className="col-title">
                <h3>Store information</h3>
              </div>
              <ul className="col-des">
                <li className="contact-info">
                  <h3 className="contact-lable">Address</h3>
                  <p>Grocery<br/> United States</p>
                </li>
                <li className="contact-info">
                  <strong  className="contact-lable">Mail us</strong>
                  <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="col-title">
                <h3>Your account</h3>
              </div>
              <ul className="col-des contact-info">
                 <li><Link>Personal info</Link> </li> 
                 <li><Link>Orders</Link> </li> 
                 <li><Link>Credit slips</Link> </li> 
                 <li><Link>Addresses</Link> </li> 
              </ul>
            </div>
            <div className="footer-col">
              <div className="col-title">
                <h3>Products</h3>
              </div>
              <ul className="col-des contact-info">
                 <li><Link>Prices drop </Link> </li> 
                 <li><Link>New products</Link> </li> 
                 <li><Link> Best sales</Link> </li> 
                 <li><Link>Stores</Link> </li> 
              </ul>
            </div>
            <div className="footer-col">
              <div className="col-title">
                <h3>Our company</h3>
              </div>
              <ul className="col-des contact-info">
                 <li><Link>Delivery</Link> </li> 
                 <li><Link>Legal Notice</Link> </li> 
                 <li><Link> About us</Link> </li> 
                 <li><Link>Secure payment</Link> </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
