import React from "react";
import {
  Pencil,
  Circle,
  Square,
  Triangle,
  Type,
  Image,
  Eraser,
  Hand,
  Palette,
  StickyNote,
  Shapes,
} from "lucide-react";

const tools = [
  { name: "select", icon: Hand, label: "Select" },
  { name: "pencil", icon: Pencil, label: "Draw" },
  { name: "shapes", icon: Shapes, label: "Shapes" },
  { name: "text", icon: Type, label: "Text" },
  { name: "image", icon: Image, label: "Image" },
  { name: "note", icon: StickyNote, label: "Sticky Note" },
  { name: "eraser", icon: Eraser, label: "Eraser" },
];

const colors = [
  "#000000",
  "#E02424",
  "#057A55",
  "#1C64F2",
  "#7E3AF2",
  "#E3A008",
];

export const Toolbar = ({ selectedTool, onSelectTool }) => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="p-2 space-y-2">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.name} className="relative group">
              <button
                onClick={() => onSelectTool(tool.name)}
                className={`p-3 rounded-lg transition-all duration-200 relative ${
                  selectedTool === tool.name
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <Icon size={20} />
              </button>
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                {tool.label}
              </div>
            </div>
          );
        })}

        <div className="w-full h-px bg-gray-200 my-2" />

        <div className="px-2">
          <div className="flex items-center mb-2">
            <Palette size={16} className="text-gray-400 mr-2" />
            <span className="text-xs font-medium text-gray-500">Colors</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-lg border-2 border-white ring-2 ring-gray-100 transition-all duration-200 hover:ring-4"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
