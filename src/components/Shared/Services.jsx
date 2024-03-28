import React from 'react';
import { FaAppStore } from "react-icons/fa";

const Services = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">

                    <button className='bg-transparent border-0'>
                        <div className="service-box p-3">
                            <div className="row mx-auto my-auto">
                                <div className="col-lg-1">
                                    <FaAppStore className='fs-1 text-light'/>
                                </div>
                                <div className="col-lg-10 text-start">
                                    <span className='fs-3 text-light px-3'>{props.serviceTitle}</span>

                                </div>
                            </div>

                            <div className="row mx-auto">
                                <div className="col-lg-1">
                                    
                                </div>
                                <div className="col-lg-10 text-start">
                                    <p className='fs-6 text-light px-3'>
                                        {props.serviceDescription}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Services;