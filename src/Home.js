import React from 'react'
import Header from './component/Header';
import HomeAbout from './component/HomeAbout';
import HomeBlog from './component/HomeBlog';
import HomeCounter from './component/HomeCounter';
import HomeGolobnews from './component/HomeGolobnews';
import HomeServices from './component/HomeServices';
import HomeSlider from './component/HomeSlider';
import HomeTab from './component/HomeTab';
import HomeTestimonial from './component/HomeTestimonial';
import HomeWecome from './component/HomeWecome';
import Request_Call from './component/Request_Call';
const Home = () => {
  return (
    <>
<Header></Header>
<HomeSlider />
<HomeWecome />
<HomeAbout />
<HomeServices />
<HomeCounter />

<div className="banner-area fix area-padding">
   <div className="container">
      <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="add-content">
               <h3>You have a business - we have a team that can help you increase efficiency and achieve outstanding results.</h3>
               <div className="add-contact">
                  <span className="call-us"><i className="ti-mobile"></i>Toll free : +1 (281) 724-8730</span>
                  <span className="call-us mail-us"><i className="ti-email"></i>Mail us : info@conwerseconsultancy.com</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<HomeBlog />


<div className="quote-area bg-color area-padding">
   <div className="container ">
      <div className="row">
         <div className="col-md-12 col-sm-12 ">
            <div className="row ">
               <div className="col-md-5 col-sm-4 col-xs-12">
                  <div className="sub-head white-headline">
                     <h3>Request a <span className="color">Call back</span></h3>
                     <img src="assets/img/rac.png" className="rac" />
                     
                  </div>
               </div>
               <div className="col-md-7 col-sm-8 col-xs-12">
                  <div className="row contact-form">
                     <Request_Call />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<HomeTab />

<HomeGolobnews />

<HomeTestimonial />

</>
  )
}

export default Home;