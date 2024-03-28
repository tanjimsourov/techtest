import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Medias = () => {
    return (
        <div className='media'>
            <div className="container">
                <div className="row d-flex justify-content-center text-end">
                    <div className="col-lg-3">
                        <a href=""><FaFacebook className='text-light fs-3' /></a>
                    </div>
                    <div className="col-lg-3">
                        <a href=""><FaLinkedinIn className='text-light fs-3' /></a>
                    </div>
                    <div className="col-lg-3">
                        <a href="mailto:someone@example.com"><IoIosMail className='text-light fs-2' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medias;