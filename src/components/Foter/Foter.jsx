import  React  from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Foter = () => {
    
    return ( <>
    
    
   <footer className="new_footer_area bg_color">
  <div className="new_footer_top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
           
          <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
            <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
            
            <BsFacebook className='text-info fs-3'/> <FaInstagram className='mx-5 text-danger fs-3 '/> <RiTwitterXLine className=' fs-3'/>
              
              <p className="mchimp-errmessage" style={{display: 'none'}} />
              <p className="mchimp-sucmessage" style={{display: 'none'}} />
            
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
            
         
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft'}}>
         
           
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          
          
        </div>
      </div>
    </div>
    <div className="footer_bg">
      <div className="footer_bg_one" />
      <div className="footer_bg_two" />
    </div>
  </div>
  <div className="footer_bottom">
    <div className="container">
      <div className="row align-items-center">
      
       
      </div>
    </div>
  </div>
</footer>

    
    </> );
}
 
export default Foter;