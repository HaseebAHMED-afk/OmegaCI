import React from "react";
import "../App.css"
import Fade from 'react-reveal/Fade';
import useWebAnimations from '@wellyshen/use-web-animations';

const FirstDiv = () => {

  const {ref} = useWebAnimations({
    keyframes:{
      transform:"rotate(360deg)"
    },
    timing:{
      duration:5000,
      iterations:"Infinity",
      easing:"ease-in-out",
      direction:"alternate"
    }
  })
  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-lg-6 col-md-12 main-heading">
        <Fade left>
        <h1>The New Way to</h1>
        </Fade>
            <div className="anim">
            <Fade top><h1>Develop.</h1></Fade>
            <Fade top><h1>Integrate.</h1></Fade>
            <Fade top><h1>Deploy.</h1></Fade>
            </div>
        </div>
        <div className="col-lg-6 col-md-12">
        <img className="anim1" ref={ref} src="./media/anim1.gif" alt="anim1" />
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
