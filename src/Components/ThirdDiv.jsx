import React from "react";
import "../App.css";

const ThirdDiv = () => {
  return (
    <div className="row testimonials">
      <h1>Testimonials</h1>
      <div className="row testimonials">
        <div className="col-lg-4 col-md-6 card1">
          <div className="card">
            <div className="card-body">
              <img
                src="./media/sergey-brig.jpg"
                className="card-title card-img"
                alt="sergey-brig"
              />
              <p className="card-text">
                "OmegaCI is an essential in our fast paced architecture and
                developing. It let us to increase productivity while decreasing
                workload."
              </p>
              <p>
              <span className="name">Sergey Brin</span>
                 - Co-Founder Of Google
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card1">
          <div className="card">
            <div className="card-body">
              <img
                src="./media/tony-hsieh.jpg"
                className="card-title card-img"
                alt="tony-hsieh"
              />
              <p className="card-text">
                "We were able to do week's work in days thanks to the high
                performance integration og OmegaCI."
              </p>
              <p>
              <span className="name">Tony Hsieh</span>
                 - Former CEO of Zappos
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 card1">
          <div className="card">
            <div className="card-body">
              <img
                src="./media/zhang-yiming.jpg"
                className="card-title card-img"
                alt="zhang-yiming"
              />
              <p className="card-text">
                "Due to the distributed cloud platform of OmegaCI, our users
                face no more downtime...... and my employees don't have to come
                to the weekend for upgrades."
              </p>
              <p>
              <span className="name">Zhang Yiming</span>
                 - Founder Of TikTok
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdDiv;
