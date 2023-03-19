import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import v from './img/image3.jpg';
import t from './img/image4.jpg';
import g from './img/image5.jpg';
import k from './img/image6.jpg';
import m from './img/image7.jpg';
import n from './img/image8.jpg';

function Events() {
  return (
    <div>
      
      <h1>
      Events Conduted :
    </h1>

<div>
<Toolbar>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={k}  style={{width:"500px",height:"70%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={t}  style={{width:"500px",height:"5%",marginLeft:"6%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={g}  style={{width:"400px",height:"300px",marginLeft:"12%"}}
            />
            </Typography>

</Toolbar>

</div>




<div>
<Toolbar>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={v}  style={{width:"500px",height:"70%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={m}  style={{width:"500px",height:"5%",marginLeft:"6%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={n}  style={{width:"400px",height:"300px",marginLeft:"12%"}}
            />
            </Typography>

</Toolbar>

</div>
    
    
    
    


     </div>
  )
}

export default Events