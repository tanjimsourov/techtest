import React from "react";
import MyBtn from "./MyBtn";

const ProjectCard = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="project-card p-4">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src={props.projectImg}
                  alt=""
                  className="img-responsive w-100 rounded-3"
                />
                <p>
                  {props.projectDescription}
                </p>
              </div>
              <div className="col-lg-12">
                <button className="bg-black text-light py-2 px-4 project-bg-btn">Preview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
