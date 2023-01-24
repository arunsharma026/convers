import React from 'react'
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const fadeImages = [
    {
    url: 'assets/img/bg.jpg',
    caption: 'IT Solutions & Consulting Company',
    heiding : 'Helping  In Diverse Software Initiatives', 
    slidepara : 'We develop effective plans to boost your business'
    },
    {
    url: 'assets/img/bg.jpg',
    caption: 'IT Solutions & Consulting Company',
    heiding: 'Transforming Into A Digital Enterprise ',
    slidepara : 'We develop effective plans to boost your business'
    },
    
  ];

  
const HomeSlider = () => {
 
  return (
    <>
    

<>
<div className='intro-area'>
<Fade>
{fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container bg-wrapper">
              <img src={fadeImage.url} />
            </div>
            <div className='intro-content'>
                <div className='slider-content'>
                    <div className='container'>
                    <div className='row'>
                    <div className='col-md-12'>
                        <div className='layer-1'>
            <span className="title1">{fadeImage.caption}</span>
            <h2 className="title2"> {fadeImage.heiding} </h2>
            <p>{fadeImage.slidepara}</p>
            
<Link to="about" className="ready-btn left-btn ">Learn More</Link>

<Link to="contact" className="ready-btn right-btn">Contact us</Link>
</div>
</div>
</div>
</div>
</div>
</div>
          </div>
        ))}
</Fade>
</div>
</>
    
    </>
  )
}

export default HomeSlider;