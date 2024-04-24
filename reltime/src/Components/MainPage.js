// MainPage.js

import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import MainCards from './MainCards';
import Phone from './Phone';
import html2pdf from 'html2pdf.js';

function MainPage() {
  const phoneRef = useRef(null);

  const handlePhoneDownload = () => {
    if (!phoneRef.current) return;

    const opt = {
        margin: -0.1,
        filename: 'phone_content.pdf',
        image: { type: 'jpeg', quality: 120 },
        html2canvas: { scale: 3},
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        // Add position-related options here
        pagebreak: { mode: ['avoid-all'] }, // Example: avoid page breaks
        x: 2, // X position
        y: 0.2, // Y position
      };
      
    html2pdf().from(phoneRef.current).set(opt).save();
  }

  
  return (
    <>
      <div className='main container-fluid'>

        <div className='brand-logo col-lg-6'>
            <img src="https://reltime-super-app.netlify.app/images/logo.png" style={{ height: '5vh' }} alt="logo2" />       
            <img src="https://reltime-super-app.netlify.app/images/logo2.png" style={{height:'8vh'}} alt="logo2"/>
        </div>

        <div className='row'>

          <div className='col-md-6 col-sm-4 col-lg-4 pt-5'>
            <div className='part-left'>
              <MainCards/>
            </div>
          </div>

          <div className='col-md-4 col-sm-4  col-lg-4 pt-5'>
            <div className='lottie'>
              <img src="https://reltime-super-app.netlify.app/images/astronot.gif" alt="astronot" width='400' height='350'/>
              <h2 style={{textAlign:"center", color:"white"}}><font face="MONO SPACE"> RELTIME SUPERAPP BUILDER</font></h2>
              <button type="button" className="btn btn-warning mt-5" onClick={handlePhoneDownload}>Download</button>
            </div>
          </div>

          <div className='col-md-4 col-sm-4 col-lg-4 p-5'>
            <div className='iphone-de' ref={phoneRef}>
              <Phone/>
            </div>
          </div>


        </div>  


      </div>



      
    </>

  );
}

export default MainPage;
