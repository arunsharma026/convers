import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Barculam from "./component/Barculam";
import { useParams, Link } from 'react-router-dom';
import BlogRight from "./component/BlogRight" 
import { useGlobleBlog, AppCreatecontext } from './context/AppcontextProvider';

//const API = "https://dummyjson.com/products";

const Blogdetail = () => {

	// const useBlog = useContext(AppCreatecontext);

	const {getBlogdetails, isLoading, blogdetails} = useGlobleBlog();
	
	 

	const {id} = useParams();

	// const { 
	// 	id : bid,
	// 	title, 
	// 	description, 
	// 	thumbnail,
	// } = blogdetails;
 
	
	// useEffect (()=>{

	// 	getBlogdetails (`${API}?id=${id}`); 
	     
	//   },[])
	

	
const [dataStudent, setDatastudent] = useState ([]);

useEffect(()=>{

    async function getdataStudent (){
        try{
            const dataStudent = await axios.get(`https://suntechapps.com/api/user/${id}`);
            setDatastudent(dataStudent.data);
			//console.log(setDatastudent);
        } catch (error) {
            console.log(`Error: Solve Error first- ${error}`);
        }
    }
    
getdataStudent(); 
}, [])



	  if(isLoading){
	
		return<div className="page_loading">Loading...</div>
	  }

	  
  return (
    <>
	
     <Barculam titlename="BlogDetails" />
	 

    
<div className="blog-area fix area-padding">
    <div className="container">
        <div className="row">
            <div className="blog-sidebar-right">
                
            <div className="col-md-8 col-sm-8 col-xs-12">
            <article className="blog-post-wrapper">
                
								<div className="blog-banner">
									<div className="blog-images">
										<img src={dataStudent.thumbnail} alt="" />
									</div>
									<div className="blog-content">
										 
										<h4>{dataStudent.title}</h4>
										<p>{dataStudent.description}</p>
									 							
										 
									 
									</div>
								</div>
							</article>


                </div>

                <BlogRight />                
            </div>
            
        </div>
        
    </div>
</div>
    
    </>
  )
}

export default Blogdetail;