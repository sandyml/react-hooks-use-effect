import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
const baseURL = "https://dog.ceo/api/breeds/image/random/3"

function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message);
      });
  }, []);;

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  );
}

export default DogPics;
