import React from 'react';
import Medias from './Medias';

const Developer = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">

                        <p className='text-light fs-5 developer-name'>Developed By Shadman Ahmad Abeer</p>

                    </div>
                    <div className="col-lg-3">
                        <Medias/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;