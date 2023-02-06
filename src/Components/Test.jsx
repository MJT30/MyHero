import React, { useEffect, useState } from "react";

function Test() {
  const [hero, setHero] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHero(data);
      });
  }, []);
  return (
    <div className="App">
      {hero && (
        <>
          <div className="name">{hero[0].name}</div>
          <br></br>
          <br></br>
          <b>Hero Name:</b> {hero[0].name}
          <br></br>
          <br></br>
          <b>Quirk:</b> {hero[0].quirk}
          <br></br>
          <br></br>
          <b>Birth Day:</b> {hero[0].birthDay}
          <br></br>
          <br></br>
          <b>Height:</b> {hero[0].height}cm
          <br></br>
          <br></br>
          <b>Blood Type:</b> {hero[0].bloodType}
          <br></br>
          <br></br>
          <b>Birth Place:</b> {hero[0].birthPlace}
          <br></br>
          <br></br>
          <b>Personality</b>: {hero[0].personality}
          <br></br>
          <br></br>
          <b>Ultimate Moves:</b> {hero[0].ultimateMoves}
        </>
      )}
    </div>
  );
}

export default Test;
