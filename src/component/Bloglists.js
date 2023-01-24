import React from 'react'; 
import { NavLink } from 'react-router-dom';
// import PagingBar from '../PagingBar';


const Bloglists = (curElem) => {

    
 const {id, name, image, title, description, thumbnail} = curElem; 
   

    return(
        
       
      
        <div className="col-md-12 col-sm-12 col-xs-12" >
        <div className="single-blog ">
            <div className="blog-image">
                <NavLink className="image-scale" to={`../blogdetail/${id}`}>
                    <img src={thumbnail} alt="" />
                </NavLink>
            </div>
            <div className="blog-content">
               
                <NavLink to="/blogdetail">
                    <h4>{title}</h4>
                </NavLink>
                <p> {description}</p>
                <NavLink className="blog-btn" to={`../blogdetail/${id}`}> Read more</NavLink>
            </div>
        </div>
        
    </div>
   
 
     

// <PagingBar value={dataInfo} />
 
 

  )
}

export default Bloglists;