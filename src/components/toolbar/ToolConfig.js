import {
  MousePointer2,
  Square,
  Circle,
  Triangle,
  Minus, // Changed from Line to Minus which is the correct icon name
  Type,
  Image,
  Eraser,
  StickyNote,
  Pencil,
} from "lucide-react";

export const tools = [
  { name: "select", icon: MousePointer2, label: "Select" },
  { name: "rect", icon: Square, label: "Rectangle" },
  { name: "circle", icon: Circle, label: "Circle" },
  { name: "triangle", icon: Triangle, label: "Triangle" },
  { name: "line", icon: Minus, label: "Line" }, // Using Minus icon for line tool
  { name: "pencil", icon: Pencil, label: "Pencil" },
  { name: "image", icon: Image, label: "Image" },
  { name: "eraser", icon: Eraser, label: "Eraser" },
];

export const colors = [
  "#000000",
  "#E02424",
  "#057A55",
  "#1C64F2",
  "#7E3AF2",
  "#E3A008",
  "#4B5563",
  "#047857",
];
