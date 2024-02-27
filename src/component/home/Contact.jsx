import React from "react";
import "./contact.css";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  return (
    <div>
      <center>
        <h1 className="b-1">Contact us</h1>
      </center>

      <div className="container cont-2 mt-5">
        <div className="row">
        <div className="col-sm-4">
          <center>
            <h4 className="mt-4 text-white">Contact Information</h4>
          </center>
          <div className="row mt-5">
            <div className="col-2 mt-2 m">
            <FmdGoodIcon/>
            </div>
            <div className="col-10">
           <p className="text-white mt-2"> A-46, Basement, sector-8 Dwarka-75, New Delhi</p>
            </div>
          </div>

          <div className="row">
            <div className="col-2 mt-2 m">
              <CallIcon/>
            </div>
            <div className="col-10">
              <p  className="text-white mt-2">+91-8588855843</p>
            </div>
          </div>

          <div className="row">
            <div className="col-2 mt-2 m">
            <EmailIcon/>
            </div>
            <div className="col-10">
              <p  className="text-white mt-2">support@cpmc.co.in</p>
            </div>
          </div>
        </div>
        <div className="col-sm-8 cont-3 px-3">
            <form>
            <div className="row">
                <div className="col-sm-6">
                    <p className="mt-4">First Name</p>
                   <input type="text" className="inp"/>
                </div>
                <div className="col-sm-6">
                <p className="mt-4">Last Name</p>
                   <input type="text" className="inp"/>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-6">
                <p className="mt-4">Phone no</p>
                   <input type="number" className="inp"/>
                </div>
                <div className="col-sm-6">

                <p className="mt-4">Email</p>
                   <input type="email" className="inp"/>
                </div>

            </div>

            <div className="row">
              <div className="col-sm-12">
                <p className="mt-4">Description</p>
                <input type="text"  className="inp-2"/>
              </div>


            </div>
            <button className="bt-3">Submit</button>
            </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
