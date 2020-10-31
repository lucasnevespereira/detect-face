import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
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
  state = { input: "", imageUrl: "" };

  onInputChange = (event) => {
    console.log(event);
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      (response) => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
