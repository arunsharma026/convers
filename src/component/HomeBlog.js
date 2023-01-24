import React from 'react' 
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

const HomeBlog = () => {
 
    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }

  return (
    
    <div className="project-area area-padding">
   <div className="container">
      <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12 ">
            <div className="section-headline text-center">
               <h3>We help customers to</h3>
          
            </div>
         </div>
      </div>
      <div className="row">
      <OwlCarousel className='owl-theme' loop margin={10}   responsive={state.responsive} nav >
 
           <div className='item'>
            
               <div className="single-awesome-project">
                    <div className="awesome-img">
                        <a href="#">
                        <img src="assets/img/business.jpg" alt="" />
                        </a>
                                <div className="add-actions text-center">
                                    <a className="venobox" data-gall="myGallery" href="assets/img/business.jpg">
                                    <i className="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                    </div>
                        <div className="project-dec">
                            <h4>Build Effective Business</h4>
                        
                        </div>
               </div>
            </div> 
           
            <div className='item'>
            
               <div className="single-awesome-project">
                    <div className="awesome-img">
                        <a href="#">
                        <img src="assets/img/business.jpg" alt="" />
                        </a>
                                <div className="add-actions text-center">
                                    <a className="venobox" data-gall="myGallery" href="assets/img/business.jpg">
                                    <i className="port-icon ti-zoom-in"></i>
                                    </a>
                                </div>
                    </div>
                        <div className="project-dec">
                            <h4>Build Effective Business</h4>
                        
                        </div>
               </div>
            </div> 
            <div className='item'>
            
            <div className="single-awesome-project">
                 <div className="awesome-img">
                     <a href="#">
                     <img src="assets/img/business.jpg" alt="" />
                     </a>
                             <div className="add-actions text-center">
                                 <a className="venobox" data-gall="myGallery" href="assets/img/business.jpg">
                                 <i className="port-icon ti-zoom-in"></i>
                                 </a>
                             </div>
                 </div>
                     <div className="project-dec">
                         <h4>Build Effective Business</h4>
                     
                     </div>
            </div>
         </div> 
          
  
</OwlCarousel>

      </div>
   </div>
   
</div>

  )
}

export default HomeBlog