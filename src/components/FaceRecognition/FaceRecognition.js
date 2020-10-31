import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  if (imageUrl) {
    return (
      <div className="center ma pb2">
        <div className="absolute mt2">
          <img src={imageUrl} alt="Image" width="500px" height="auto" />
        </div>
      </div>
    );
  } else return <div></div>;
};

export default FaceRecognition;
