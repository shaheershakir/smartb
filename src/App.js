import { useState } from "react";
import "./App.css";
import Clarifai from "clarifai";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const app = new Clarifai.App({
    apiKey: "e15eb7cec81c4803a765a68f36b74420",
  });

  const [input, setInput] = useState("");
  const [faceData, setFaceData] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [box, setBox] = useState();
  const [route, setRoute] = useState("signIn");

  const calculateFaceLocation = (data) => {
    setFaceData(data.outputs[0].data.regions[0].region_info.bounding_box);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return (
      <div
        className="bounding-box"
        style={{
          top: faceData.top_row * height + "%",
          right: (1 - faceData.right_col) * width + "%",
          bottom: (1 - faceData.bottom_row) * height + "%",
          left: faceData.left_col * width + "%",
        }}
      ></div>
    );
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onButtonSubmit() {
    setImageURL(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, imageURL)
      .then((response) => {
        displayFaceBox(calculateFaceLocation(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onRouteChange(route) {
    setRoute(route);
  }

  return (
    <div className="App">
      <Navigation />
      {route === "signIn" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <>
          <Logo />
          <Rank />
          <ImageLinkForm
            InputChange={onInputChange}
            ButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition imageURL={imageURL} box={box} />
        </>
      )}
    </div>
  );
}

export default App;
