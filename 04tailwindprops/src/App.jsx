import { useState } from "react";
import Card from "./components/Card";
import "./App.css";


function App() {
  let myObj = {
    username: "varun",
    age: 21,
  }

  let newArr=[1, 2, 3];
  return (
    <>
      <p className="p-4 bg-orange-400 rounded-xl m-4">
        React + Tailwind is amazing
      </p>

      <Card username="dalba" someObj={myObj} btn="visit me" />
      <Card username="Chai aur code" someObj={newArr} />
    </>
  );
}

export default App;
