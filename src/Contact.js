import React from 'react'
import Barculam from './component/Barculam';
import Contactform from './component/Contactform';

const Contact = () => {
  return (
    <>
    <Barculam titlename="Contact"></Barculam>
    
    <div className="contact-area area-padding">
   <div className="container">
      
      <div className="row">
         <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="thanku_conta">
               <h3>Thank you for your interest in Conwerse Consultancy Services. Please fill out the form below to
                  ask a question or report a technical problem.
               </h3>
               <p>Please note: while we appreciate your questions, we are unable to respond to all inquiries.</p>
            </div>
         </div>
         
         <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="contact-form">
               <div className="row">
                  <div  >
                    <Contactform />
                  </div>
               </div>
            </div>
         </div> 
      </div>
   </div>
</div>

    
    </>
  )
}

export default Contact;