import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import { Component } from "react";

const app = new Clarifai.App({
  apiKey: "a0a359df4388405cb8979754587f9883",
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
    },
  },
};

class App extends Component {
  state = { input: "" };

  onInputChange = (event) => {
    console.log(event);
  };

  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
        "d02b4508df58432fbb84e800597b8959",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        (response) => {
          console.log(response);
        },
        (err) => console.log(err)
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <div className="header">
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm
          onButtonSubmit={this.onButtonSubmit}
          onInputChange={this.onInputChange}
        />
        {/* FaceRecognition */}
      </div>
    );
  }
}

export default App;
