import * as React from "react";
import "./styles.css";

import { CitiesHeader } from "./components/CitiesHeader";
import { CitiesList } from "./components/CitiesList";
import { CitiesForm } from "./components/CitiesForm";
import { rootStore, StoreContext } from "./rootStore";

export default function App() {
  return (
    <StoreContext.Provider value={rootStore}>
      <div className="App">
        <header className="App-Header" />
        <CitiesHeader />
        <CitiesList />
        <CitiesForm />
      </div>
    </StoreContext.Provider>
  );

  // return (
  //   <StoreProvider>
  //     <div className="App">
  //       <header className="App-Header" />
  //       <CitiesHeader />
  //       <CitiesList />
  //       <CitiesForm />
  //     </div>
  //   </StoreProvider>>
  // );
}
