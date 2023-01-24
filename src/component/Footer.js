import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer className="footer1">
    <div className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12">
                    <div className="footer-content logo-footer">
                        <div className="footer-head">
                            <div className="footer-logo">
                                <NavLink to="/">
                                  <img src="assets/img/logo.png" alt="" /></NavLink>
                            </div>
                            <p>
                              Our consulting company is one of the leaders in the market of professional consulting services for medium and large businesses. 
                            </p>
                            <div className="subs-feilds">
                            <div className="suscribe-input">
                                            <input type="email" 
                                            className="email form-control width-80" 
                                             placeholder="Type Email" />
                                            <button type="submit" id="sus_submit" className="add-btn">Subscribe</button>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 col-sm-3 col-xs-12">
                    <div className="footer-content">
                        <div className="footer-head">
                            <h4>Services Link</h4>
                            <ul className="footer-list">
                                <li><NavLink to="case-study">Blog </NavLink></li> 
                                <li><NavLink to="/">Business</NavLink></li>
                                <li><NavLink to="faq">FAQ </NavLink></li>
                            </ul>
                            <ul className="footer-list hidden-sm">
                                <li><NavLink to="/onlinesupport">Online Support</NavLink></li>
                                <li><NavLink to="/">Privacy Policy</NavLink></li>
                                <li><NavLink to="/">Terms of Use</NavLink></li>
                                <li><NavLink to="/">Cookie Policy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <div className="footer-content last-content">
                        <div className="footer-head">
                            <h4>Information</h4>
                            <div className="footer-contacts">
                                <p><span>Location :</span> 85 Broad St, New York, NY 10004 , USA</p>
                                <p><span>Tel :</span> +1 (281) 724-8730</p>
                                <p><span>Email :</span> info@conwerseconsultancy.com</p>
                            </div>
                            <div className="footer-icons">
                                <ul>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-skype"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div className="footer-area-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="copyright">
                        <p>
                            Copyright © 2020
                            <a href="#">Conwers Consultancy Services</a> All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</footer>

  )
}

export default Footer;