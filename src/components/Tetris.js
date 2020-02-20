import React from "react";
import { createStage } from "../gameHelpers";

// components
import Stage from "./Stage";
import StartButton from "./StartButton";
import Display from "./Display";

const Tetris = () => {
  return (
    <div>
      <Stage stage={ createStage() }/>
      <asside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </asside>
    </div>
  );
};

export default Tetris;
