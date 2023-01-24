import React from 'react'
import HomeGolobnews from './component/HomeGolobnews';
import HomeTestimonial from './component/HomeTestimonial';
const About = () => {
  return (
    <>
    <div className="about_intro-area">
   <div className="bg-wrapper">
      <img src="assets/img/abt_bg.jpg" alt="" />
   </div>
   <div className="intro-content">
      <div className="slider-content">
         <div className="container">
            <div className="row">
               <div className="col-md-5 col-xs-offset-7"> 
                  <div className="about_txt wow fadeInUp" data-wow-delay="0.3s">
                     <h2 className="title2">What now? Decisive actions to emerge stronger in the next normal</h2>
                  </div> 
                  <div className="about_txt wow fadeInUp" data-wow-delay="0.5s" >
                     <p>Six months into the COVID-19 pandemic, it is time for companies to act, not react.</p>
                     <a href="">Reenergize your organization <i className="fa fa-arrow-right"></i></a><br />
                     <a href=""> Explore all our insights on the next normal beyond coronavirus <i
                        className="fa fa-arrow-right"></i></a>
                  </div> 
               </div>
            </div>
         </div>
      </div>
   </div>
</div>



<div className="about-area about-3 fix">
   <div className="container-full">
      <div className="row">
         <div className="col-md-7 col-sm-8 col-xs-12">
            <div className="support-all about-content2">
               <div className="section-headline right-headline black-headline">
                  <h3> About <span className="color">us</span></h3>
                  <p>Our consulting company is one of the leaders in the market of professional consulting services for medium and large businesses. <br/><br/>
                     We study your business requirements and processes carefully. We then help you trace your exact software requirements and business problem areas which can be effectively managed by innovative software solutions. With our knowledge and technical expertise, we can amplify your ideas and provide exposure to the latest technology for best implementation of automation and digitalization in your existing business functions. We know the best-proven methodologies and practices which will help to boost the performance of your organization and maintain an upper-hand in the competitive market.
                  </p>
               </div>
            </div>
         </div>
         <div className="col-md-5 col-sm-4 col-xs-12">
            <div className="about-image">
               <div className="video-content ">
               </div>
            </div>
         </div> 
      </div>
   </div>
</div>

<HomeTestimonial />
    
    <HomeGolobnews />
    </>

  );
}

export default About;