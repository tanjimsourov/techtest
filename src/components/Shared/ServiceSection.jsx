import React from "react";
import Services from './Services';
import SectionTitle from './SectionTitle';

const ServiceSection = () => {
  return (
    <div>
      <div className="container">
        <SectionTitle sectionTitle = "Services" />

        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-5 my-3">
            <Services
              serviceTitle="App Development"
              serviceDescription="Make Dynamic and Elegent App for your University, School &  Corporate"
            />
          </div>

          <div className="col-lg-5 my-3">
            <Services
              serviceTitle="Web Development"
              serviceDescription="Make Dynamic and Elegent App for your University, School &  Corporate"
            />
          </div>

          <div className="col-lg-5 my-3">
            <Services
              serviceTitle="Digital Markting"
              serviceDescription="Markting & Branding on Digital Platforms, And grow your Business"
            />
          </div>

          <div className="col-lg-5 my-3">
            <Services
              serviceTitle="Graphic Design"
              serviceDescription="Make Dynamic and Elegent Graphics for your University, School &  Corporate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
