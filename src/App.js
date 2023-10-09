import { useState } from "react";
import "./App.css";
import Clarifai from "clarifai";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

function App() {
  const app = new Clarifai.App({
    apiKey: "e15eb7cec81c4803a765a68f36b74420",
  });

  const [input, setInput] = useState("");
  const [faceData, setFaceData] = useState([]);
  const [imageURL, setImageURL] = useState("");

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onButtonSubmit() {
    setImageURL(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, imageURL)
      .then((response) => {
        setFaceData(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      })
      .catch((error) => {
        console.log(error);
      });
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
      <FaceRecognition imageURL={imageURL} />
    </div>
  );
}

export default App;
