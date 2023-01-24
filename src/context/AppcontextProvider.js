import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reduser from "../reduser/Blogreduser";

const AppCreatecontext = createContext();

 const API = "https://suntechapps.com/api/fetch";
 

const initialState ={

    isLoading: false,
    isError :false,
    products : [],
    blogdetails : {},
}

const AppcontextProvider = ({children})=>{
 
const [state, dispatch] = useReducer(reduser, initialState);

const getBlogs = async (url) =>{

    dispatch({type: "SET_LOADING"});
    
   try {
	 const res = await axios.get(url);
	    const products = await res.data;
       // console.log(products);     
        dispatch({type: "SET_API_DATA", payload: products});

} catch (error) {
	dispatch({type : "API_ERROR"});
}
}


const getBlogdetails = async (url) =>{

    dispatch({type : "SET_LOADING"});

    try{
        const res = await axios.get(url);
        const blogdetails = await res.data;
        
        
        dispatch({type: "SET_BLOGS_DATA", payload: blogdetails});
    } catch (error){
        dispatch({type: "API_ERROR"});
    }
}

useEffect(()=>{

    getBlogs(API); 

},[])

return (

    <AppCreatecontext.Provider value={{...state, getBlogdetails}}>

{children}

    </AppCreatecontext.Provider>

)
}

const useGlobleBlog = () =>{

    return useContext(AppCreatecontext);

 };

export default AppcontextProvider;

export {AppCreatecontext, useGlobleBlog};