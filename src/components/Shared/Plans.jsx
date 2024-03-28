import React from "react";
import DetailsCard from "./DetailsCard";
import SectionTitle from "./SectionTitle";

const Plans = () => {
  return (
    <div>
      <div className="container pt-5">
        <SectionTitle sectionTitle="Plans" />
        <div className="row">
          <div className="col-lg-4">
            <DetailsCard
              cardTitle="Markting"
              cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores ipsum dolores libero dolorem assumenda temporibus, magnam doloribus! Voluptate esse harum assumenda voluptates, dicta nulla officia possimus deleniti sint ratione perferendis illum consectetur architecto fuga vitae neque ducimus accusantium? Labore quaerat sed, impedit culpa a aut placeat facere exercitationem veniam!"
            />
          </div>

          <div className="col-lg-4">
            <DetailsCard
              cardTitle="Development"
              cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores ipsum dolores libero dolorem assumenda temporibus, magnam doloribus! Voluptate esse harum assumenda voluptates, dicta nulla officia possimus deleniti sint ratione perferendis illum consectetur architecto fuga vitae neque ducimus accusantium? Labore quaerat sed, impedit culpa a aut placeat facere exercitationem veniam!"
            />
          </div>

          <div className="col-lg-4">
            <DetailsCard
              cardTitle="Graphics"
              cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores ipsum dolores libero dolorem assumenda temporibus, magnam doloribus! Voluptate esse harum assumenda voluptates, dicta nulla officia possimus deleniti sint ratione perferendis illum consectetur architecto fuga vitae neque ducimus accusantium? Labore quaerat sed, impedit culpa a aut placeat facere exercitationem veniam!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
