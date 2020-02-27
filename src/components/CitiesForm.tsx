import React, { useState } from "react";
import { useStore } from "../rootStore";

export const CitiesForm = () => {
  const { addCity } = useStore(rootStore => ({
    addCity: rootStore.addCity
  }));

  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addCity(city);
        setCity("");
      }}
    >
      <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      <button type="submit">Add City</button>
    </form>
  );
};
