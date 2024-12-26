import React, { useRef, useState, useEffect } from "react";
import rough from "roughjs";
import { setupGrid } from "./canvasUtils";

const generator = rough.generator();

export const Canvas = ({ selectedTool, selectedColor }) => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [elements, setElements] = useState([]);

  const createElement = (x1, y1, x2, y2) => {
    let roughElement;
    if (selectedTool === "line")
      roughElement = generator.line(x1, y1, x2, y2, {
        stroke: selectedColor,
      });
    else if (selectedTool === "rect")
      roughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1, {
        stroke: selectedColor,
      });
    else if (selectedTool === "circle") {
      const centerX = x1 + (x2 - x1) / 2;
      const centerY = y1 + (y2 - y1) / 2;
      const diameter = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      roughElement = generator.circle(centerX, centerY, diameter, {
        stroke: selectedColor,
      });
    } else if (selectedTool == "triangle")
      roughElement = generator.polygon(
        [
          [x1, y1],
          [x2, y2],
          [x1 + (x2 - x1) / 2, y1],
        ],
        {
          stroke: selectedColor,
        }
      );

    return { x1, y1, x2, y2, roughElement };
  };

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    if (selectedTool === "pencil") {
      setElements((prev) => [
        ...prev,
        { type: "pencil", points: [{ x: clientX, y: clientY }] },
      ]);
    } else {
      const newElement = createElement(clientX, clientY, clientX, clientY);
      setElements((prev) => [...prev, newElement]);
    }
    setDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const { clientX, clientY } = e;
    const index = elements.length - 1;
    if (selectedTool === "pencil") {
      const updatedElement = {
        ...elements[index],
        points: [...elements[index].points, { x: clientX, y: clientY }],
      };
      const elementsCopy = [...elements];
      elementsCopy[index] = updatedElement;
      setElements(elementsCopy);
    } else {
      const { x1, y1 } = elements[index];
      const updatedElement = createElement(x1, y1, clientX, clientY);
      const elementsCopy = [...elements];
      elementsCopy[index] = updatedElement;
      setElements(elementsCopy);
    }
  };

  const handleMouseUp = () => setDrawing(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rc = rough.canvas(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setupGrid(ctx, canvas.width, canvas.height);
    };

    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setupGrid(ctx, canvas.width, canvas.height);

    elements.forEach((element) => {
      if (element.type === "pencil" && Array.isArray(element.points)) {
        ctx.beginPath();
        element.points.forEach(({ x, y }, index) => {
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.strokeStyle = selectedColor;
        ctx.stroke();
      } else if (element.roughElement) {
        rc.draw(element.roughElement);
      } else if (selectedTool == "eraser") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setElements([]);
      }
    });

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [elements]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="touch-none cursor-crosshair"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};
