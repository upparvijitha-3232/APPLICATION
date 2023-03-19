import React from 'react'
import p from './img/image8.jpg';
import i from './img/image11.jpg';
import q from './img/image10.jpg';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Collaborations() {
  return (
    <div>
      <div><h4 style={{padding:'50px',textAlign:"center"}}><b>IE(I) collaborated with Robotic Club to increase the exposure with different types of instruments and technologies.
Robo sccocer is one such event which is conducted during EmErgE 2k22
IE(I) collaborated with ASME to give the knowledge about Hydrogen fuel cells</b>
      
</h4></div>
<div>
<Toolbar>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={p}  style={{width:"400px",height:"90%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={q}  style={{width:"500px",height:"50%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={i}  style={{width:"500px",height:"70%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
           

</Toolbar>

</div>
    </div>
    
  )
}

export default Collaborations