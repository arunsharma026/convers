import React,{useEffect, useState} from 'react'
import {PaginationItem, PaginationLink , Pagination } from 'reactstrap';


const PagingBar = ({showparpage, onPaginationChange, totalPage}) => {
 

  const [pageCount, setpageCount] = useState(1)
 
  const [noButton, setnoButton] = useState(Math.ceil(totalPage/showparpage));

useEffect(()=>{

  const pagevalue= showparpage * pageCount; 

  onPaginationChange(pagevalue - showparpage, pagevalue);

  console.log (pagevalue)
},[pageCount])


const onClickpagechange = (type)=>{

  if(type === "prv"){
    
    if(pageCount === 1){
      setpageCount(1)
    } else {
      setpageCount(pageCount - 1 )
    }
    
  } else if (type === "next"){

    if( noButton === pageCount){

      setpageCount(pageCount)

    } else{
      setpageCount(pageCount + 1)
    }
  }

}

  return (
    <>
    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="blog-pagination">
                                            <ul className="pagination">
                                               <li>
                                                <button onClick={()=> onClickpagechange("prv")}>Prev</button>
                                                </li>
                                                {

                                                  new Array(noButton).fill("").map((el, index)  => 
                                                     
                                                     <li className={`${index + 1 === pageCount ? "active" : null}`}>

                                                    <button onClick={()=> setpageCount(index + 1 )}>
                                                      {index + 1}
                                                      </button>
                                                   </li>
                                                  )
 
                                                 
                                                }
                                               
                                               <li>
                                                <button onClick={()=> onClickpagechange("next")}>Next</button>
                                                </li>
                                            </ul>
                                        </div>	
                    
</div>
    </>
  )
}

export default PagingBar;