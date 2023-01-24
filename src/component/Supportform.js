import axios from 'axios';
import React, { useState } from 'react'


const Supportform = () => {

  const [selectedFile, setSelectedFile] = React.useState({
      name : "", 
email:" ", 
company : "",
subject:"",
sendimage:"",
message:"",

    });

    const [status, setStatus] = useState(false);
    const [fail, setfail] = useState(false);

    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      for ( var key in selectedFile ) {
          formData.append(key, selectedFile[key]);
      }
  
      if(!selectedFile.name || !selectedFile.email || !selectedFile.message || !selectedFile.sendimage){ 
        setfail(true);
        setStatus(false); 
      }else{

        try {
          const response = await axios({
            method: "post",
            url: "https://suntechapps.com/api/online-sport/upload.php",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
         
          setfail(false);
          setStatus(true); 
          selectedFile({})
        } catch(error) {
          console.log(error)
        }
        setSelectedFile({name : "", email:" ", company : "", sendimage:"", subject:"", sendimage:"", message:"" });
      //  console.log(event.target.type);
      }
      }
    

     
  
    const handleFileSelect = (event) => {
     // setSelectedFile(event.target.files[0])
  
      setSelectedFile({
          ...selectedFile,
          [event.target.name] : (event.target.name==="sendimage") ? event.target.files[0] : event.target.value  ,       
      })
     
    }


    return (
    
    <form  className="wpcf7-form init" onSubmit={handleSubmit}>
      <div className='row'>
         <div className='col-md-12'>
         <div>{(status) ? <h2 className="success">Thank you, We will contact you soon..</h2> : " "}</div>
  <div >{(fail) ? <h2 className="fail">Please fill all field</h2> : null}</div>
         </div>
      </div>
<div className='row'>
   
                        <div className="col-md-6 col-sm-6 col-xs-12">
                           
                            
                            <input type="text"
                            name="name"
                            value={selectedFile.name} 
                            onChange={event=>handleFileSelect(event)} 
                            placeholder="Name*" />

                        </div>
                        
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="email" name="email"  placeholder="Email*"
                         value={selectedFile.email}
                          onChange={event=>handleFileSelect(event)} 
                           /> 
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                         <input type="text" name="company" 
                         placeholder="Company" 
                         value={selectedFile.company}
                         onChange={event=>handleFileSelect(event)} 
                         /> 
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                         <input type="text" name="subject" 
                           placeholder="Subject" 
                           value={selectedFile.subject}
                           onChange={event=>handleFileSelect(event)}  />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                         <input type="file"name="sendimage"  
                        onChange={handleFileSelect} />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea name="message" className=" form-control"  rows="10"  placeholder="Message*" value={selectedFile.message}
                         onChange={event=>handleFileSelect(event)}  ></textarea>
                         
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                         <input type="submit" value="Send Message"   />
                      </div> 
                      </div>
                   </form>

  )
}

export default Supportform