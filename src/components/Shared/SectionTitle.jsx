import React from 'react';

const SectionTitle = (props) => {
    return (
        <div className="row py-4 mx-auto d-flex justify-content-center">
          <div className="col-lg-2 text-center">
            <p className="fs-1 text-light my-element">{props.sectionTitle}</p>
          </div>
        </div>
    );
};

export default SectionTitle;