import React from 'react'
import y from './img/image2.jpg';
function Membership() {
  return (
    <div><p style={{padding:'50px'}}><h1 style={{color:"red"}}>DESCRIPTION:</h1><b>Institution of Engineers (India) [IEI] is the largest multi-disciplinary professional body of engineers and been serving the engineering fraternity for over a Century with its national and international presence. 
    Enrolling into IE(I) is a very easy process just scan the code, fill the details and pay.
  </b>
    </p>
 
           <p style={{marginLeft:"50px"}}><b>Even the enrollment fee for IE(I) is 300Rs/- only 
  </b><a href='https://thumbs.dreamstime.com/z/mother-daughter-granddaughter-54956645.jpg'><h1>click here</h1></a>
  </p>
  <div>
    <h4 style={{marginLeft:"50px",color:"red"}}>San here:</h4>
  <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={y}  style={{width:"30%",height:"70%",marginLeft:"30%"}}
            />
  </div>
    </div>
  )
}

export default Membership