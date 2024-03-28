import React from "react";
import "/src/components/Shared/ProjectSection.css";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
const ProjectSection = () => {
  const [isActive, setIsActive] = useState("false");
  const scrollDown = () =>{
    setIsActive(!isActive);
  };

  return (
    <div>
      <SectionTitle sectionTitle="Projects" />
      <div className="container">
        <div className="scroll-bg py-3 text-center my-5">
          <div className={isActive? "scroll-div" : "make-full-screen"}>
            <div className="px-2">
            <div className="scroll-object">
              <div className="row">

                {/* start loopinig this div */}
                <div className="col-lg-3 py-2">
                  <ProjectCard
                    projectImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    projectDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                  />
                </div>
                {/* end loopinig this div */}

                {/* ////////////////////////// */}
                {/* del this part after looing */}
                <div className="col-lg-3 py-2">
                  <ProjectCard
                    projectImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    projectDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                  />
                </div>
                <div className="col-lg-3 py-2">
                  <ProjectCard
                    projectImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    projectDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                  />
                </div>
                <div className="col-lg-3 py-2" id="sectionTwo">
                  <ProjectCard
                    projectImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    projectDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                  />
                </div>
                <div className="col-lg-3 py-2">
                  <ProjectCard
                    projectImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    projectDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                  />
                </div>
                {/* ////////////////////////// */}
                {/* del this part after looing */}
              </div>{" "}
            </div>
            </div>
          </div>
          <button
            className="py-2 px-5 bg-black text-light rounded-2 scroll-bg-btn"
            onClick={scrollDown}
          >
            {isActive? "See more" : "See Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
