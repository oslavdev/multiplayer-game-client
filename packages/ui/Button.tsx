import * as React from "react";
export const Button = () => {

  function onClick(){
    alert("I lied 🌚")
  }

  return <button onClick={onClick}>Press me and nothing will happen</button>;
};
