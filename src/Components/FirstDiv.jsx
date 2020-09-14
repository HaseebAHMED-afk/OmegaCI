import React from "react";
import "../App.css"

const FirstDiv = () => {
  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-lg-6 col-md-12 main-heading">
            <h1>The New Way to</h1>
            <div className="anim">
            <h1>Develop.</h1>
            <h1>Integrate.</h1>
            <h1>Deploy.</h1>
            </div>
        </div>
        <div className="col-lg-6 col-md-12">
        <img className="anim1" src="./media/anim1.gif" alt="anim1" />
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
