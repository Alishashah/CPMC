import React from 'react'
import myImage from './images/img-3.png';
import './article.css'

const Article = () => {
  return (
    <div className="container-fluid cont pb-4">
        <div className="row px-4">
            <div className="col-sm-6 mt-4 ">
               <img src={myImage} className='im-1'/>
            </div>
            <div className="col-sm-6 mt-4">
                {/* first div */}
                <div className="row">
                    <div className="col-sm-12 di-1">
                        <p className='h-1'>Mission:</p>
                        <p className='p-1'>
                        To provide quality workmanship and customer service and maintain the highest level of professionalism, honesty
                         and fairness in our relationships with our customers, employees and vendors. To grow by continually providing useful
                         and significant products, services, and solutions to markets we already serve-and to expand into new are and coustomer interest.
                        </p>
                    </div>
                </div>
                  {/* second div */}
                <div className="row">
                    <div className="col-sm-12 di-1">
                    <p className='h-1'>Vision:</p>
                        <p className='p-1'>
                        "To be a company that is in a position to take up any challenge in the infrastructure industry.
                        </p>
                    </div>
                </div>
                  {/* third div */}
                <div className="row">
                    <div className="col-sm-12 di-1">
                    <p className='h-1'>Values:</p>
                        <p className='p-1'>Commitment to customers, Passion, Leadership,Innovation Quality, Team Work.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Article;
