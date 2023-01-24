import axios from 'axios';
import React, { useState } from 'react'

const Request_Call = () => {

   const [userRequest, setuserRequest] = useState({
    name:"",
    email:"",
    company : "",
    subject:"",
    message:""
   }) 

   const [status, setStatus] = useState(false);
   const [fail, setfail] = useState(false);
   
   function  onTextfildChange (e){

    setuserRequest({
        ...userRequest,
        [e.target.name] : e.target.value
    })

   }

function onFormsubmit(e){
    e.preventDefault();


    if(!userRequest.name || !userRequest.email || !userRequest.subject || !userRequest.message){
        setfail(true);
        setStatus(false); 
    } 
    else{

        try{
            axios.post(`https://suntechapps.com/api/email-api/register.php`, userRequest) 
            setStatus(true);
           setfail(false);
           setuserRequest({name : "", email:" ", company:"", subject:"", subject:"", message:"",})
        } catch (error){
            console.log(`Error: Solve Error first- ${error}`)
        }
        setStatus(true) 
    }
 
}


  return (
   <>

<form class="contact-form">
<div class="col-md-12 col-sm-12 col-xs-12"> {(status) ? <h2 className="success">Thank you, We will contact you soon..</h2> : " "} 
   {(fail) ? <h2 className="fail">Please fill all field</h2> : null}
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12"> 

                  <input type="text"  class="form-control" value={userRequest.name} name='name' onChange={e=>onTextfildChange(e)} placeholder="Name" required="" />
                  <div class="help-block with-errors"></div> 

                   <input type="email" class="email form-control" value={userRequest.email} name='email' onChange={e=>onTextfildChange(e)} placeholder="Email" required=""/> 
                   <div class="help-block with-errors"></div> 

                   <input type="text" class="email form-control" value={userRequest.company} name='company' onChange={e=>onTextfildChange(e)} placeholder="company" required=""/> 
                   <div class="help-block with-errors"></div> 

                    <input type="text"   class="form-control last-part" value={userRequest.subject} name='subject' 
                    onChange={e=>onTextfildChange(e)} placeholder="Subject" required="" />
                       </div>

                        <div class="col-md-6 col-sm-6 col-xs-12">
                           <textarea rows="9" placeholder="Massage" name='message' value={userRequest.message} class="form-control" required="" onChange={e=>onTextfildChange(e)}></textarea>
                          <button type="submit" onClick={e => onFormsubmit(e)} class="quote-btn">Submit</button>
                                             
                                        </div>   
                                    </form>

   </>
  )
}

export default Request_Call