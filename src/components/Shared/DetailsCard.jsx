import React from "react";
import '/src/components/Shared/DetailsCard.css'
const DetailsCard = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
        <div class="centerBox">
        <div class="categoryWrapper p-2 text-center">
          <p>
            <span className="fs-1 text-light">
              {props.cardTitle}
            </span>
            <br />

            <span className="text-light">

              {props.cardDescription}
        
            </span>
          </p>
          
          <button className="btn-padding">
            <span>
              <span>
                <span data-attr-span="See the Range">See the Range</span>
              </span>
            </span>
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
