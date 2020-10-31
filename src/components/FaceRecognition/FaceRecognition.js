import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  if (imageUrl) {
    return (
      <div className="center ma pb2">
        <div className="absolute mt2">
          <img
            id="inputImage"
            src={imageUrl}
            alt="Image"
            width="500px"
            height="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default FaceRecognition;
