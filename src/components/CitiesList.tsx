import React, { FunctionComponent } from "react";
import { useStore } from "../rootStore";
import { Observer } from 'mobx-react';

interface CitiesListItemProps {
  id: string;
  name: string;
}

const CitiesListItem: FunctionComponent<CitiesListItemProps> = ({
  id,
  name
}) => {
  return <li key={id}>{name}</li>;
};

export const CitiesList = () => {
  const { cities } = useStore(rootStore => ({
    cities: rootStore.cities
  }));

  return (
    <Observer>
      {() => (
        <ul>
          {cities.map(city => (
            <CitiesListItem id={city.id} name={city.name} />
          ))}
        </ul>
      )}
    </Observer>
  );
};
