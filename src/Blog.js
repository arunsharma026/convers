import React from 'react'
import Barculam from './component/Barculam';
import BlogLeft from "./component/BlogLeft";
import BlogRight from "./component/BlogRight";


const Blog = () => {
 

  return (
     
    <>
    
    <Barculam titlename="Blog" />

    
        <div className="blog-area fix area-padding">
            <div className="container">
                <div className="row">
                    <div className="blog-sidebar-right">
						  
<div className="col-md-8 col-sm-8 col-xs-12">
							<div className="row">
							    <div className="blog-left-content">
 
                        <BlogLeft />
                        </div>
                            </div>
                        </div>

                        <BlogRight />
						
                    </div>
                    
                </div>
                
            </div>
        </div>


    </>

  )
}

export default Blog;