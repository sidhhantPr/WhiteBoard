import React, { useLayoutEffect, useState } from "react";
import { Header } from "./Header";
import { Toolbar } from "./toolbar/Toolbar";
import { Canvas } from "./canvas/Canvas";

import roughjs from "roughjs";

const generator = roughjs.generator();

export const Whiteboard = () => {
  const [selectedTool, setSelectedTool] = useState("select");
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <Header />
      <Toolbar
        selectedTool={selectedTool}
        onSelectTool={setSelectedTool}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <Canvas selectedTool={selectedTool} selectedColor={selectedColor} />
    </div>
  );
};
