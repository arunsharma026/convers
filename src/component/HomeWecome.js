import React from 'react'

const HomeWecome = () => {
  return (
    
<div className="welcome-area fix area-padding">
   <div className="container">
      <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="all-wel-services"> 

               <div className="well-services wow fadeInUp" data-wow-delay="0.3s">
                  <div className="services-img">
                     <a className="big-icon" href="#"><i className="flaticon-052-project-plan"></i></a>
                  </div>
                  <div className="main-wel">
                     <div className="wel-content">
                        <h4>Data Processing</h4>
                        <p>Transforming data into actionable insights
                        </p>
                        <a href="#">Read more</a>
                     </div>
                  </div>
               </div>
               
               <div className="well-services wow fadeInUp" data-wow-delay="0.7s">
                  <div className="services-img">
                     <a className="big-icon" href="#"><i className="flaticon-002-analysis"></i></a>
                  </div>
                  <div className="main-wel">
                     <div className="wel-content">
                        <h4>Research & Analysis</h4>
                        <p>Businesses need to make critical decisions and formulate marketing strategies based on customer and market insights
                        </p>
                        <a href="#">Read more</a>
                     </div>
                  </div>
               </div>
               
               <div className="well-services wow fadeInUp" data-wow-delay="0.5s">
                  <div className="services-img">
                     <a className="big-icon" href="#"><i className="flaticon-060-team-work"></i></a>
                  </div>
                  <div className="main-wel">
                     <div className="wel-content">
                        <h4>AI Consulting</h4>
                        <p>We assess your technological maturity and readiness for AI-driven automation and follow you through all the stages of adopting artificial intelligence in your business operations
                        </p>
                        <a href="#">Read more</a>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   </div>
</div>
    
  )
}

export default HomeWecome