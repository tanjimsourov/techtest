import React from 'react';

import "/src/components/Pages/admin/adminPanal.css"
import AdminUpdateForm from '../../Shared/AdminUpdateForm';

const AdminPanal = () => {
    return (
        <div className='bg-mid-night'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Services" 
                        titleHolder = "Enter service title"  
                        titleDiscription = "Enter service description" />
                    </div>
                    


                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Plans" 
                        titleHolder = "Enter plans title"  
                        titleDiscription = "Enter plans description" />
                    </div>


                    <div className="col-lg-12 py-5">
                        <p className='fs-1 text-light'>Projects</p>
                        <input type="text" className="form-control mb-2" placeholder= "Enter project title" />
                        <input type="text" className="form-control my-2" placeholder=  "Enter protect description" />
                        <input type="text" className="form-control my-2" placeholder=  "Enter project link" />
                        <div class="mb-3">
                            <label for="formFile" class="form-label text-light">Upload Image</label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                        <button className='btn btn-success px-5'> Add </button>
                        <button className='btn btn-danger m-2 px-5'> Remove </button>
                        <hr className='text-light' />
                    </div>

                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Accordion" 
                        titleHolder = "Enter accordion title"  
                        titleDiscription = "Enter accordion description" />
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AdminPanal;