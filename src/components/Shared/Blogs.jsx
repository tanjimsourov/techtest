import React from 'react';
import SectionTitle from './SectionTitle';
import Blog from './Blog';
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { useState } from 'react';

const Blogs = () => {

    const [isActive, setIsActive] = useState("false");
    const makeDark = () =>{
    setIsActive(!isActive);
    };

    return (
        <div>
            <div className="container pt-5">
                <SectionTitle sectionTitle = "Blogs"/>
                <div className={isActive? "blogs-light my-5" : "blogs my-5"}>

                <div className="row blogs-scroll border border-1 rounded-1 d-flex justify-content-evenly pb-4">
                    <div className="col-lg-11 text-end">
                        <button className='bg-transparent text-light p-1 border-0 fs-2' onClick={makeDark}>{isActive?  <IoIosMoon className='text-dark' />: <MdSunny />}</button>

                    </div>
                    
                    {/* start looping this div . . . . . */}
                    <div className="col-lg-5">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>
                    {/* end looping this div . . . . . */}



                    {/* ////////////////////////// */}
                    {/* del this part after looing */}
                    <div className="col-lg-5">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>
                    {/* del this part after looing */}
                    {/* ////////////////////////// */}

                    
                </div>

                </div>
                
            </div>
        </div>
    );
};

export default Blogs;