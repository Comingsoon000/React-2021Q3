import React from "react";
import "./Cards.css";

export type Card = {
  id: number;
  userName: string;
  gender: string;
  country: string;
  birthday: string;
};

interface CardsProps {
  cards: Card[];
}

export const Cards = ({ cards }: CardsProps): JSX.Element => {
  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <div className="card__string">{card.userName}</div>
            <div className="card__string">{card.gender}</div>
            <div className="card__string">{card.country}</div>
            <div className="card__string">{card.birthday}</div>
          </div>
        );
      })}
    </div>
  );
};
