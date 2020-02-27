import { observable, computed, action } from "mobx";
import { createStoreContext } from "./createStoreContext";

class City {
  @observable id: string = Math.random().toString();
  @observable name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// classes are nice when using mobx because the decorators are pretty easy to work with
// note this is a plain class with mobx decorators
// in TMF 3.0, we're taking this further, using the `mobx-keystone` library
class RootStore {
  // Note lower case - upper case typically denotes a class
  @observable cities: City[] = [new City("Gotham")];

  // Unneeded - this is the same as .cities
  // @computed get allCities(): string[] {
  //   return this.cities;
  // }

  // Computed values should do more than access observables
  @computed get citiesByLength(): City[] {
    return this.cities.sort((a, b) => a.name.length - b.name.length);
  }

  @computed get cityCount(): number {
    return this.cities.length;
  }

  // import to bind `this`; hence the .bound on the end
  @action.bound
  addCity(name: string) {
    this.cities.push(new City(name));
  }
}

const rootStore = new RootStore();

const { StoreContext, useStore, useStoreEffect, connect } = createStoreContext<
  RootStore
>(rootStore);

export { rootStore, StoreContext, useStore, useStoreEffect, connect };
