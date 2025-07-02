import { MdOutlineMarkEmailRead } from "react-icons/md";

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
                <strong>Store information</strong>
              </div>
              <ul className="col-des">
                <li>
                  <strong>Address</strong>
                  <p>Grocery United States</p>
                </li>
                <li>
                  <strong>Mail us</strong>
                  <p><a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="col-title">
                <strong>Store information</strong>
              </div>
              <ul className="col-des">
                <li>
                  <strong>Address</strong>
                  <p>Grocery United States</p>
                </li>
                <li>
                  <strong>Mail us</strong>
                  <p><a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
