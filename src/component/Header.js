import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';  

const Header = () => {   
   
   const [menu, setMenu] = useState(false);
   
   
 
   const menubarbtn = {
      position: "absolute",
      right: "10px",
      background: "no-repeat",
      border: "0",
      color: "#333",
      fontSize: "22px",
      top: "12px",
   }

  return (
   
    <header className="header-one">  
   <div className="topbar-area fix hidden-xs">
      <div className="container">
         <div className="row">
            <div className=" col-md-9 col-sm-9">
               <div className="topbar-left">
                  <ul>
                     <li><a href="!#"><i className="fa fa-envelope"></i> info@conwerseconsultancy.com</a></li>
                     <li><NavLink to=""><i className="fa fa-phone-square"></i> +1 (281) 724-8730</NavLink></li>
                  </ul>
               </div>
            </div>
            <div className="col-md-3 col-sm-3">
               <div className="top-social">
                  <ul>
                     <li><a href="!#"><i className="fa fa-skype"></i></a></li>
                     <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                     <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
   
   <div id="sticker" className="header-area hidden-xs">
      <div className="container mean-container">
         <div className="row">
          
            <div className="col-md-3 col-sm-3">
               <div className="logo"> 

                  <NavLink  className="navbar-brand page-scroll black-logo" to="/">
                  <img src="assets/img/logo.png" alt="" />
                  </NavLink>
               </div> 


            </div>
            <div className="col-md-9 col-sm-9">
               <div className="header-right-link">
                  
                  <NavLink  className="s-menu"to="contact">Get In Touch</NavLink>
               </div> 

               <nav className="navbar navbar-default">
                  <div className="collapse navbar-collapse" id="navbar-example">
                     <div className="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                           <li><NavLink to="/">Home</NavLink> </li>
                           <li><NavLink to="about">About</NavLink></li>
                           
                           <li><NavLink to="case-study">Case Study</NavLink> </li>
                           <li><a >Career</a> </li>
                           <li><a >Services</a> </li>
                        </ul>
                     </div>
                  </div>
               </nav> 

            </div>
         </div>
      </div>
   </div> 

   <div className=" hidden-lg hidden-md hidden-sm">
      <div className="container mean-container">
         <div className="row">
            <div className="col-md-12">
               <div  className={menu ? "mobile-menu mobile-menu-area active" : "mobile-menu mobile-menu-area"} >
                  <div className="logo">
                     <NavLink to="/">
                      <img src="assets/img/logo.png" alt="" />

                      </NavLink>
                  </div>
                  <button style={menubarbtn} className="opn_mnu" onClick={()=> setMenu(true)}>
                     <i className='fa fa-bars'></i>
                     </button>

                     <button style={menubarbtn} className="cls_mnu" onClick={()=> setMenu(false)}>
                     <i className='fa fa-close'></i>
                     </button>

                  <nav id="dropdown" className= "mean-nav"  >
    <ul>
       
       <li><NavLink to="/" onClick={()=> setMenu(false)}>Home</NavLink> </li>
       <li><NavLink to="about" onClick={()=> setMenu(false)}>About</NavLink></li>
       <li><NavLink to="case-study" onClick={()=> setMenu(false)}>Case Study</NavLink> </li>
       <li><a onClick={()=> setMenu(false)}>Career </a> </li> 
       <li><NavLink to="contact" onClick={()=> setMenu(false)}>Contact</NavLink> </li> 
    </ul>
 </nav>

               </div>
            </div>
         </div>
      </div>
   </div> 
</header>

    
  )
}

export default Header;