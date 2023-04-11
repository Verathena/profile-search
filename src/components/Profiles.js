import React from "react";
import "../styles/Profiles.css";

const Profiles = (props) => {
  return (
    <>
      <div className="profile">
        <img src={props.picture} alt="profile" className="profile--img" />
        <div className="profile--details">
          <p>{props.id}</p>
          <p className="profile--name">
            {props.title} {props.firstName} {props.lastName}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profiles;
