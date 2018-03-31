import React from "react";
import { render } from "react-dom";

const MyTitle = function(props) {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}> {props.title.toUpperCase()} </h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of thrones" color="YelloGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="Silicon Valley" color="LimeGreen" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById("app"));
