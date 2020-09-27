import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Dan",
      url: "https://avatars1.githubusercontent.com/u/68016701?s=460&u=4ae39a2b8aba2dd3736d40ddd64fefffe6158616&v=4",
    },
    {
      name: "Gladt",
      url: "https://avatars1.githubusercontent.com/u/2517870?s=460&u=bcb148d7e63a9585a168dc5a014969827b6666ee&v=4   ",
    },
  ]);

  return (
    <div>
      <h1>Cards</h1>
        <div className="tindercards__cardcontainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default TinderCards;
