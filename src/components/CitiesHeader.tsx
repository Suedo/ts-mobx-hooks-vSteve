import React from "react";
import { connect } from '../rootStore';

interface PureCitiesHeaderProps {
  count: number;
}

const PureCitiesHeader = ({count}: PureCitiesHeaderProps) => {
  return <h1>Number of cities: {count}</h1>
}

export const CitiesHeader = connect(PureCitiesHeader, (rootStore) => ({
  count: rootStore.cityCount
}))
