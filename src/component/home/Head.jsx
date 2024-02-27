import React from 'react'
import myImage from './images/img1.jpeg';
import myImages from './images/download.jpeg';
import './head.css'


const Head = () => {
  return (

  <div className="container-fluid cont py-4">
    {/* first row */}
    <div className="row">
        <div className="col-sm-12">
            <center><h1>C.P.M.C Solution</h1>
            <hr className='hr-1'/>
            </center>
        </div>
    </div>
    {/* second row */}
    <div className="row">
        <div className="col-sm-6 mt-3">
            {/* image */}
            <center><img src={myImage} alt='description' className='cont-1'/></center>
           <center><button className='bt-1'>Construction</button></center>
        </div>

        <div className="col-sm-6 mt-3">
            <center><img src={myImages} alt='description'  className='cont-1'/></center>
            <center><button className='bt-2'>Hr Solution</button></center>
        </div>
    </div>
  </div>
  )
}

export default Head;
