import React from "react";

const Blog = (props) => {
  return (
    <div>
      <div className="row">
        
          <div className="project-card p-4 m-2">
            <div className="row text-center">
              <div className="col-lg-12">
                <img
                  src={props.blogImg}
                  alt=""
                  className="img-responsive w-100 rounded-3 pb-3"
                />
                <p>{props.blogDescription}</p>
              </div>
              <div className="col-lg-12">
                <button className="bg-black text-light py-2 px-4 project-bg-btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Blog;
