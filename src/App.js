import React from "react";
import Search from "./Search";
import Favorites from "./Favorites";
import Meals from "./Meals";

function App() {
  return (
    <div className=" bg-gray-100  p-1">
      <Search />
      <Favorites />
      <Meals />
    </div>
  );
}

export default App;
