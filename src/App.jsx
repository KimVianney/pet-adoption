import { createRoot } from "react-dom/client";
// import Pet from "./Pet"
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "Luna",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Bird",
  //     name: "Pepper",
  //     breed: "Cocktail",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Cat",
  //     name: "Doink",
  //     breed: "Mixed",
  //   }),
  // ]);
  return (
  <div>
    <h1>Adopt Me!</h1>

    {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Doink" animal="bird" breed="Cockatiel" />
    <Pet name="Doink" animal="Cat" breed="Mixed" /> */}

    <SearchParams />
  </div>
  )

};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
