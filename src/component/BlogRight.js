import React from 'react'
import { Link } from 'react-router-dom';

const BlogRight = () => {
  return (
    
    <div className="col-md-4 col-sm-4 col-xs-12">
							<div className="left-head-blog right-side">
								 
								<div className="left-blog-page">
									<div className="left-blog blog-category">
										<h4>Case Studies</h4>
										<ul>
											<li><Link to="/case-study">Business</Link> </li>
											<li><Link to="/case-study">Agency </Link> </li>
											<li><Link to="/case-study">Media</Link> </li> 
										</ul>
									</div>
								</div>
								 
								 
							</div>
						</div>

  )
}

export default BlogRight;