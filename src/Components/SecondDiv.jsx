import React from "react";
import "../App.css";

const SecondDiv = () => {
  return (
    <div className="container seconddiv">
    <h1>Features</h1>
      <div className="row row1">
        <div className="col-lg-4 col-md-6  ">
          <img className="icon" src="./media/dash.gif" alt="dash" />
          <p className="icon-text">High Performance. Faster actions speed.</p>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/key.gif" alt="key" />
          <p className="icon-text">High Security. Every Member of your team is authenticated.</p>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/pricing.gif" alt="pricing" />
          <p className="icon-text">Highly Affordable plans. Cost Effective and Cost Efficient.</p>
        </div>
      </div>
      <div className="row row2">
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/puzzle.gif" alt="puzzle" />
          <p className="icon-text">Easy To Integrate and Deploy.</p>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/tool.gif" alt="tool" />
          <p className="icon-text">Easy To Configure</p>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/cloud.gif" alt="cloud" />
          <p className="icon-text">Distributed Cloud System.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
