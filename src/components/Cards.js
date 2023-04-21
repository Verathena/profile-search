import React from "react";
import "../styles/Cards.css";
// import { profileData } from "./ProfileData";
import Profiles from "./Profiles";

const Cards = ({searchQuery}) => {
  /* Note to Self:
  The .map() method used here loops over the individual data presented in the profiles (profileData). 
  You return the Component(Profiles) that houses the data and then return the new array(cardElements).
  */

  const cardElements = searchQuery.map((data) => {
    return (
      <>
        <Profiles
          key={data.id}
          id={data.id}
          title={data.title}
          firstName={data.firstName}
          lastName={data.lastName}
          picture={data.picture}
        />
      </>
    );
  });
  const content = cardElements?.length ? cardElements : "";
  return (
    <>
      {/* Note to Self: Do NOT use an extra wrapper div here! The data will not render in the grid styling*/}
      <div className="card--wrapper">{content}</div>
    </>
  );
};

export default Cards;
