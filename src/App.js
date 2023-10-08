import { useState } from "react";
import "./App.css";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

function App() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState();

  function onInputChange(event) {
    console.log(event.target.value);
  }

  function onButtonSubmit() {
    console.log("I got clicked");
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        InputChange={onInputChange}
        ButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition />
    </div>
  );
}

export default App;
