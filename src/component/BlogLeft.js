import React, { useContext, useState } from 'react' 
import { useGlobleBlog, AppCreatecontext } from '../context/AppcontextProvider';
// import Bloglists from './Bloglists'; 
import Bloglists from './Bloglists';
import PagingBar from '../component/PagingBar';

const BlogLeft = () => {

    const usecon = useContext(AppCreatecontext);

    const [showparpage, setshowPerpage] = useState(2);
    const [pagination, setPagination] = useState({
        start:0,
        end:showparpage,
     });
    
     const onPaginationChange = (start, end)=>{

      setPagination({start: start, end: end})
     // console.log(start, end);

     }

    const {isLoading, products} = usecon;
 
      //console.log(products)
   
    if(isLoading){
        return<div>........Loading</div>
    }

  return (  
<div>    
{

products.slice(pagination.start, pagination.end).map((curElem)=>{ 

    return(
     <Bloglists key={curElem.id} {...curElem}></Bloglists>
)
  })
}
<PagingBar 
showparpage={showparpage}  
onPaginationChange={onPaginationChange}
totalPage={products.length}  
/>

</div>                           
                            
  )
} 
export default BlogLeft;