import React from "react";
import "../App.css"

const FirstDiv = () => {
  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-sm-6">
            <h1>The New Way to</h1>
            <div className="anim">
            <h1>Develop.</h1>
            <h1>Integrate.</h1>
            <h1>Deploy.</h1>
            </div>
        </div>
        <div className="col-sm-6">
        <img className="anim1" src="./media/anim1.gif" />
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
