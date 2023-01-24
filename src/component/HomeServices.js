import React from 'react'

const HomeServices = () => {
  return (
    <div className="service-area bg-color area-padding-2">
   <div className="container">
      <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
               <h3>Our Approach to Software Consultancy</h3>
               <p>Being one of the trusted software consulting company in India, we make sure to provide result oriented approach for the IT consulting services.</p>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="all-services"> 

            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="single-service wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-icon">
                     <span className="flaticon-052-project-plan"></span>
                  </div>
                  <div className="service-inner">
                     <div className="service-content">
                        <h4>Understanding the scope of the problem</h4>
                        <p>Our consulting team will first understand your idea, vision and business needs before we can propose you the right technical solution. The team will conducts interviews with stakeholders to know their significant IT challenges and identify user expectations to understand the project better and plan the right strategy.</p>
                        <a className="service-btn" href="#"><i className="ti-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="single-service wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-icon">
                     <span className="flaticon-031-financial"></span>
                  </div>
                  <div className="service-inner">
                     <div className="service-content">
                        <h4>Building roadmaps for efficiency</h4>
                        <p>Post understanding the problem the team will chalk out different steps in form of phases and will bring all stakeholders on the same page via assigning timelines to each phase of the project through a roadmap.</p>
                        <a className="service-btn" href="#"><i className="ti-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="single-service wow fadeInUp" data-wow-delay="0.7s">
                  <div className="service-icon">
                     <span className="flaticon-057-statistics"></span>
                  </div>
                  <div className="service-inner">
                     <div className="service-content">
                        <h4>Techno business sessions</h4>
                        <p>Based on your version of the idea and actual ground requirements, our expert IT consultants will perform intense brainstorming sessions to develop the required solution.</p>
                        <a className="service-btn" href="#"><i className="ti-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
            </div> 

            <div className="col-md-3 col-sm-6 col-xs-12">
               <div className="single-service wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-icon">
                     <span className="flaticon-012-business"></span>
                  </div>
                  <div className="service-inner">
                     <div className="service-content">
                        <h4>Building success for your business</h4>
                        <p>The techno business sessions output gives us the required clarity based on which we deploy our technical resources to the project.</p>
                        <a className="service-btn" href="#"><i className="ti-arrow-right"></i></a>
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

export default HomeServices