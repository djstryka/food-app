import React from 'react'
import './Navbar.css';



function Navbar() {
  return (
    
    <div className='container'>
      <div className='inner-container'>        
        <div className='company-title'>
          <h1>SEXXIE FOODS</h1>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="orange
          " xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15.4615C20.399 12.1722 19.0337 9.34141 16.8462 7.15385C14.6586 4.96628 11.8278 3.60096 8.53846 3L3 21L21 15.4615Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7.5 6C7.5 6 8.03795 6.1182 8.90014 6.38146C11.6322 7.21565 14.0691 8.83278 16 11.0001" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.75 17.734C10.75 16.5815 11.6 15.75 12.5267 15.75V14.25C10.6624 14.25 9.25 15.8666 9.25 17.734H10.75ZM12.5267 15.75C13.338 15.75 14.0831 16.3789 14.2636 17.3147L15.7364 17.0306C15.4383 15.485 14.1505 14.25 12.5267 14.25V15.75ZM10.8247 18.305C10.7763 18.1253 10.75 17.9338 10.75 17.734H9.25C9.25 18.066 9.29383 18.3886 9.37629 18.695L10.8247 18.305Z" fill="currentColor" />
            <path d="M7.25 11.4446C7.25 12.4999 6.47461 13.25 5.64305 13.25V14.75C7.4149 14.75 8.75 13.2119 8.75 11.4446H7.25ZM6.09623 9.71206C6.73256 9.92253 7.25 10.5924 7.25 11.4446H8.75C8.75 9.9937 7.86238 8.7163 6.56726 8.28794L6.09623 9.71206ZM5.64305 13.25C5.49588 13.25 5.35427 13.2279 5.21996 13.1867L4.78004 14.6208C5.05455 14.705 5.34434 14.75 5.64305 14.75V13.25Z" fill="currentColor" />
            <path d="M13.0078 12L12.9988 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>


        </div>

        <div className='nav-links' >
          <ul className='routes'>
            <div className='home-color'>
              <li>Home</li>

            </div>
           
            <div className='nav-colors'>
              <li>Categories</li>
            </div>
            <div className='help-color'>
              <li>Help</li>
            </div>
            <div className='about-color'>
              <li>About</li>
          </div>
            
            
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
  
}

export default Navbar
