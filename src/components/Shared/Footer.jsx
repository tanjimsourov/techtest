import React from 'react';
import Medias from './Medias';
import Developer from './Developer';
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="mix-box">

                </div>
            
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center text-light">
                            <img src="/src/assets/img/logo_H.png" className='logo p-5' alt="" />
                            <p className='fs-1 fw-medium'>Husmerk_Tech</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-8 ">
                            <div className="row d-flex justify-content-between">
                                <div className="col-lg-1">
                                    <p className='fs-5'><a href="" className='text-light p-2 rounded-1 '>Home</a></p>
                                </div>

                                <div className="col-lg-1">
                                <p className='fs-5'><a href="" className='text-light p-2 rounded-1'>About</a></p>
                                </div>

                                <div className="col-lg-1">
                                <p className='fs-5'><a href="" className='text-light p-2 rounded-1'>Service</a></p>
                                </div>

                                <div className="col-lg-1">
                                <p className='fs-5'><a href="" className='text-light p-2 rounded-1'>Projects</a></p>
                                </div>

                                <div className="col-lg-1">
                                <p className='fs-5'><a href="" className='text-light p-2 rounded-2'>Contact</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center pb-5">
                        <div className="col-lg-4">
                            <Medias/>

                        </div>
                    </div>        
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center text-center">
                            <FaRegCopyright className='text-light'/> &nbsp;&nbsp;
                            <p className='text-light'>
                                All copyright 2024 Husmerk_Tech. All rights reserved.
                            </p>
                        </div>
                        <hr className='text-light' />
                    </div>
                </div>
                <Developer/>
            </div>
        </div>
    );
};

export default Footer;