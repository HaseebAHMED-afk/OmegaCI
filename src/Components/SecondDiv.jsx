import React from "react";
import "../App.css";
import Fade from 'react-reveal/Fade';

const SecondDiv = () => {
  return (
    <div className="container seconddiv">
    <Fade top><h1>Features</h1></Fade>
      <div className="row row1">
        <Fade top><div className="col-lg-4 col-md-6  ">
          <img className="icon" src="./media/dash.gif" alt="dash" />
          <p className="icon-text">High Performance. Faster actions speed.</p>
        </div></Fade>
        <Fade top> <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/key.gif" alt="key" />
          <p className="icon-text">High Security. Every Member of your team is authenticated.</p>
        </div></Fade>
        <Fade top> <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/pricing.gif" alt="pricing" />
          <p className="icon-text">Highly Affordable plans. Cost Effective and Cost Efficient.</p>
        </div></Fade>
      </div>
      <div className="row row2">
      <Fade top>  <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/puzzle.gif" alt="puzzle" />
          <p className="icon-text">Easy To Integrate and Deploy.</p>
        </div></Fade>
        <Fade top>
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/tool.gif" alt="tool" />
          <p className="icon-text">Easy To Configure</p>
        </div></Fade>
        <Fade top>
        <div className="col-lg-4 col-md-6 ">
          <img className="icon" src="./media/cloud.gif" alt="cloud" />
          <p className="icon-text">Distributed Cloud System.</p>
        </div></Fade>
      </div>
    </div>
  );
};

export default SecondDiv;
