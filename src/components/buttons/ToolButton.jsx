import React from "react";

export const ToolButton = ({ tool, selectedTool, onSelect }) => {
  const Icon = tool.icon;

  return (
    <div className="relative group">
      <button
        onClick={() => onSelect(tool.name)}
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
};
