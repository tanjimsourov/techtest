import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from './SectionTitle';

const Sliders = () => {
  return (
    <div className="sl">
      <SectionTitle sectionTitle = "Projects" />
      <div className="row">
        <div className="col-lg-12">
          <div className="">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner mx-auto ">
                <div class="carousel-item active ">
                  <img
                    src="/src/assets/img/transparent.png"
                    class="d-block w-100"
                    alt="..."
                  />

                  <div class="carousel-caption">
                    <div className="row ">
                      <div className="col-lg-12">
                        <ProjectCard />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="/src/assets/img/transparent.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption">
                    <div className="row ">
                      <div className="col-lg-12">
                        <ProjectCard />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="/src/assets/img/transparent.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption">
                    <div className="row ">
                      <div className="col-lg-12">
                        <ProjectCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
