import React from 'react'
import OwlCarousel from 'react-owl-carousel';


const HomeTestimonial = () => {

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
    
    
    <div className="reviews-area area-padding">
   <div className="container">
      <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
               <h3>Customer say some words</h3>
               <p>Help agencies to define their new business objectives and then create professional software.</p>
            </div>
         </div>
      </div>
      
      <div className="row">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="Reviews-content">
           
               <div className="testimonial-carousel item-indicator">
               <OwlCarousel className='owl-theme' loop margin={10} responsive={state.responsive} nav>
               <div className='item'>
                  <div className="single-testi">
                     <div className="testi-text">
                        <div className="clients-text">
                           <div className="client-rating">
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                           </div>
                           <p>When replacing a multi-lined selection of text, the generated dummy text
                              maintains the amount of lines. When replacing a selection. help agencies.
                           </p>
                           <div className="testi-img ">
                              <div className="guest-details">
                                 <h4>Edward</h4>
                                 <span className="guest-rev">Genarel customer</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>

                  <div className='item'> 
                  <div className="single-testi">
                     <div className="testi-text">
                        <div className="clients-text">
                           <div className="client-rating">
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                           </div>
                           <p>When replacing a multi-lined selection of text, the generated dummy text
                              maintains the amount of lines. When replacing a selection. help agencies.
                           </p>
                           <div className="testi-img ">
                              <div className="guest-details">
                                 <h4>Charlotte</h4>
                                 <span className="guest-rev">Genarel customer</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
                  <div className='item'> 
                  <div className="single-testi">
                     <div className="testi-text">
                        <div className="clients-text">
                           <div className="client-rating">
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                           </div>
                           <p>When replacing a multi-lined selection of text, the generated dummy text
                              maintains the amount of lines. When replacing a selection. help agencies.
                           </p>
                           <div className="testi-img ">
                              <div className="guest-details">
                                 <h4>Daniel</h4>
                                 <span className="guest-rev">Genarel customer</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
                  
                  <div className='item'> 
                  <div className="single-testi">
                     <div className="testi-text">
                        <div className="clients-text">
                           <div className="client-rating">
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                              <a href="#"><i className="ti-star"></i></a>
                           </div>
                           <p>When replacing a multi-lined selection of text, the generated dummy text
                              maintains the amount of lines. When replacing a selection. help agencies.
                           </p>
                           <div className="testi-img ">
                              <div className="guest-details">
                                 <h4>Graham</h4>
                                 <span className="guest-rev">Genarel customer</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>
               </OwlCarousel>
               </div>
             
            </div>
         </div>
      </div>
   </div>
</div>


  )
}

export default HomeTestimonial