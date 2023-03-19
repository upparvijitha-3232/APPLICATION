

import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Header() {
  return (
    <div>
    <AppBar position='sticky'>
        <Toolbar>
            <Typography>
            <img 
      src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png"
      alt="new" style={{ width: 200, height: 200 }}
      />
            </Typography>

            <Typography >
            
    <p style={{padding:'80px',marginTop:'1px',marginRight:'6px',marginLeft:'8px',marginBottom:'0px',paddingBottom:'0%',paddingTop:'0%'}}><h2>VALLURUPALLI NAGESWARA RAO VIGNANA JYOTHI
INSTITUTE OF ENGINEERING AND TECHNOLOGY</h2></p><p style={{marginBottom:'1px',marginRight:'6px',marginLeft:'6px',paddingBottom:'0%'}} >
<h6>An Autonomous Institute, NAAC Accredited with ‘A’ Grade
NBA Accredited for CE, EEE, ME, ECE, CSE, EIE, IT B.Tech Courses
Approved by AICTE, New Delhi, Affiliated to JNTUH
Recognized as “College with Potential for Excellence” by UGC</h6></p>
            </Typography>



            <Typography >
            <img 
      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Institution_of_Engineers_%28India%29_Logo.svg/1200px-Institution_of_Engineers_%28India%29_Logo.svg.png"
      alt="new" style={{ width: 200, height: 200 }}
      />
            </Typography>
        </Toolbar>
        
    </AppBar>
    
    </div>
  )
}

export default Header;