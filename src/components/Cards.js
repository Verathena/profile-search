import React from "react";
import "../styles/Cards.css";
import { profileData } from "./ProfileData";
import Profiles from "./Profiles";

const Cards = () => {
  /* Note to Self:
  The .map() method used here loops over the individual data presented in the profiles (profileData). 
  You return the Component(Profiles) that houses the data and then return the new array(cardElements).
  */

  const cardElements = profileData.map((data) => {
    return (
      <>
        <Profiles
          id={data.id}
          title={data.title}
          firstName={data.firstName}
          lastName={data.lastName}
          picture={data.picture}
        />
      </>
    );
  });
  return (
    <>
      {/* Note to Self: Do NOT use an extra wrapper div here! The data will not render in the grid styling*/}
      <div className="card--wrapper">{cardElements}</div>
    </>
  );
};

export default Cards;
