import React from 'react';
import "/src/components/Pages/admin/adminPanal.css"
import Services from './Services';

const AdminUpdateForm = (props) => {
    return (
        <div>
            <div className="">
                <div className="row">
                    <div className="col-lg-12">

                        <p className='fs-1 text-light'>{props.title}</p>
                        <input type="text" className="form-control mb-2" placeholder= {props.titleHolder} />
                        <input type="text" className="form-control my-2" placeholder= {props.titleDiscription} />
                        <button className='btn btn-success px-5'> Add </button>
                        <button className='btn btn-danger m-2 px-5'> Remove </button>
                        <hr className='text-light' />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUpdateForm;