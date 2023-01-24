import axios from "axios";
import React, {  useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom"; 



const Contactform = () => {
    const navigate = useNavigate();
    
    const [users, setUsers] = useState({
        name : "", 
  email:" ", 
  company : "",
  subject:"",
  message:"",

      });
  
      const [status, setStatus] = useState(false);
      const [fail, setfail] = useState(false);

    function onTextfildChange(e){

        setUsers({
            ...users,
            [e.target.name] : e.target.value
        })
        
      //  console.log(users)
    }

    function onFormsubmit(e){
     
        e.preventDefault();
      
        if(!users.name || !users.email || !users.message){ 
          setfail(true);
          setStatus(false); 
        }
      
        else{ 
        try{
        
          axios.post(`https://suntechapps.com/api/email-api/register.php`, users)  
           setStatus(true);
           setfail(false);
           setUsers({name : "", email:" ", company : "", subject:"",message:"",})
      }
      catch (error){
         console.logo(`Error: Solve Error first- ${error}`);
      }
      setStatus(true) 
      }  
      
  }
        
        
  return (
    <>
     
     <form  className="wpcf7-form init"> 
    <div className="col-md-12 col-sm-12 col-xs-12">
     {(status) ? <h2 className="success">Thank you, We will contact you soon..</h2> : " "} 
   {(fail) ? <h2 className="fail">Please fill all field</h2> : null}</div>
     
     

                       <div className="col-md-6 col-sm-6 col-xs-12">
                           
                           <input type="text"
                            name="name"
                            value={users.name} 
                            onChange={e=>onTextfildChange(e)} 
                           placeholder="Name*"
                           required
                           />

                       </div>
                       <div className="col-md-6 col-sm-6 col-xs-12">
                         <input type="email" name="email" value={users.email}  placeholder="Email*" onChange={e=>onTextfildChange(e)} required /> 
                       </div>
                       <div className="col-md-12 col-sm-12 col-xs-12">
                          <input type="text" name="company" value={users.company} placeholder="Company" 
                          onChange={e=>onTextfildChange(e)}  required
                          /> 
                       </div>
                       <div className="col-md-12 col-sm-12 col-xs-12">
                          <input type="text" name="subject" value={users.subject}   placeholder="Subject" 
                          onChange={e=>onTextfildChange(e)} />
                       </div>
                       <div className="col-md-12 col-sm-12 col-xs-12">
                         <textarea name="message" className=" form-control" value={users.message}  rows="10"  placeholder="Message*" onChange={e=>onTextfildChange(e)} ></textarea>
                          
                       </div>
                       <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                          <input type="submit" value="Send Message" onClick={e => onFormsubmit(e)}  />
                       </div> 
                    </form>
    </>
  )
}

export default Contactform