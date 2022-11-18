import React from "react";
import Card from "./Card";

export default function Cards({ cities, onClose }) {
  return (
    <>
      {cities &&
        cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        ))}
    </>
  );
}
