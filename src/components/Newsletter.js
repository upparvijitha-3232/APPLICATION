import React from 'react'
import a from './img/image12.jpg';
import b from './img/image13.jpg';
import c from './img/image14.jpg';
import { AppBar, Toolbar, Typography } from '@mui/material';
function Newsletter() {
  return (
    <div><h4 style={{padding:'50px'}}>
      
Events of 2021-2022
Debate competitions,essay writing, sessions on gate,MS,MBA,arduino
Seminars on hydrogen fuel cells and coal crisis 
EmErgE the technical fest of EEE
Convergence which is the technical fest of VNRVJIET, IE(I) have a active participation in it 
</h4>


<Toolbar>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={a}  style={{width:"500px",height:"70%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={b}  style={{width:"500px",height:"70%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
            <Typography>
            <img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={c}  style={{width:"500px",height:"70%",marginLeft:"3%",marginTop:"1%"}}
            />
            </Typography>
           

</Toolbar>



















</div>
  )
}

export default Newsletter