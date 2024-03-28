import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
const Banner = () => {
    const [text] = useTypewriter({
        words:['Website', 'Software', 'Web App', 'LMS'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 100,
    });
    return (
        <>
         <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className='fw-bold text-light'>Build Your own <br />
                        <span className='span-shadow'>"{text}</span>
                        <Cursor/>
                        "
                        </p>
                    </div>
                </div>
            </div>
         </div>
         <div className="mix-box">
            
         </div>

        </>
    );
};

export default Banner;