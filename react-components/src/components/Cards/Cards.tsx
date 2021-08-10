import "./Cards.css";
import React from "react";
import { cards } from "./cards";

export const Cards = (): JSX.Element => {
  return (
    <ul className="cards">
      {cards.map((card) => {
        return (
          <li className="card" key={card.hotel}>
            <div className="card__hotel">{card.hotel}</div>
            <div className="card__destination">
              {card.country}, {card.destination}
            </div>
            <div className="card__rating">{card.rating}</div>
            <div
              className="card__image"
              style={{ backgroundImage: `url(../../public/${card.image})` }}
            />
            <div className="card__bottom">
              <div className="card__date">Check-in Date: {card.date}</div>
              <div className="card__cost">From {card.cost} RUB</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
