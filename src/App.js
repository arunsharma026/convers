 import React from "react";
import { BrowserRouter, Route, Routes , useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Error from "./Error";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./Contact";
import Blogdetail from "./Blogdetail";
import Faq from "./Faq";
import Onlinesupport from "./Onlinesupport";
import {useLayoutEffect} from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
   <BrowserRouter >
   <Wrapper>
    <Header></Header>
<Routes>

<Route exact path="/" element={<Home />} /> 
<Route path="/about"  element={<About />} />
<Route  path="/case-study" element={<Blog />} />
<Route  path="/blogdetail/:id"  element={<Blogdetail />} />
<Route  path="/contact" element={<Contact />} />
<Route  path="/faq"  element={<Faq />} />
<Route path="/onlinesupport"  element={<Onlinesupport />} />
<Route  path="*"   element={<Error />} />

</Routes>
<Footer ></Footer>
</Wrapper>
</BrowserRouter>

  );
}

export default App;
