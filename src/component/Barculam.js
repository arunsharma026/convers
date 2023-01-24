import React from 'react'

const Barculam = (pros) => {

    // const {title} = titlename;

  return (


   
    <div className="page-area">
            <div className="breadcumb-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcrumb text-center">
                            <div className="section-headline white-headline text-center">
                                <h3>{pros.titlename}</h3>
                            </div>
                            <ul>
                                <li className="home-bread">Home</li>
                                <li>{pros.titlename}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Barculam