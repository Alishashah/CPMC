import React from "react";
import "./footer.css";
import myImg from './images/img1.jpeg'

const Footer = () => {
  return (
    <div className="container-fluid mt-5 cont-4">
      <div className="row">
        <div className="col-sm-4">
          <center><img src={myImg} alt="" className="mt-5 im-2"/></center>
          <p className="mt-5 px-5">
            We blend our diversity of expertise with empirical and ethnographic
            research, immersing ourselves in our clients worlds to understand
            their needs in their context.
          </p>
        </div>
        <div className="col-sm-4">
          <h1 className="mb-5 mt-5">Construction</h1>
          <p>Project Management Consultancy</p>
          <p>New Construction</p>
          <p>NDT Work</p>
          <p>Repair and Rehabition</p>
          <p>Interior works</p>
          <p>Water Proofing</p>
          <p>Controlled and Uncontrolled Dismanting</p>
        </div>
        <div className="col-sm-4">
          <h1 className="mb-5 mt-5">Hr Solution</h1>
          <p>Executive Search</p>
          <p>Recruitment Solution</p>
          <p>Contract Staffing & Payroll</p>
          <p>HR Advisory & Consulting</p>
          <p>Traning and Development</p>
        </div>
      </div>

 <hr className="hr-2 mt-5 text-black"/>
 <div className="row">
 <div className="col-sm-10">
  <p>Copyright © 2022 C.P.M.C. Solution. All Rights Reserved</p>
 </div>
 <div className="col-sm-2"></div>
 </div>
    </div>
  );
};
export default Footer;
