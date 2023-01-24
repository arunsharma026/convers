import React from 'react'
import Barculam from './component/Barculam'
import Supportform from "./component/Supportform";

const Onlinesupport = () => {
  return ( 
    <>
    <Barculam titlename="Online Support"></Barculam>

        <div class="contact-area area-padding">
            <div class="container"><div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="thanku_conta">
                            <h2>We're here..</h2>
                            <p>Please note: while we appreciate your questions, we are unable to respond to all inquiries.</p>
                        </div>
                            <div className='contact-form'>
                                <Supportform />
                            </div>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-12">
                    <img src='assets/img/online.jpg' className='img-responsive' />
                </div>
            </div>
        </div>
         </div>
    </>
  )
}

export default Onlinesupport;