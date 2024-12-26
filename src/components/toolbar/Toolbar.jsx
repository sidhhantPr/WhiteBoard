import { tools } from "./ToolConfig";
import { ToolButton } from "../buttons/ToolButton";
import { Palette } from "lucide-react";
import { colors } from "./ToolConfig";
import { ColorButton } from "../buttons/ColorButton";
export const Toolbar = ({
  selectedTool,
  onSelectTool,
  selectedColor,
  onSelectColor,
}) => (
  <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-gray-100">
    <div className="p-2 space-y-2">
      {tools.map((tool) => (
        <ToolButton
          key={tool.name}
          tool={tool}
          selectedTool={selectedTool}
          onSelect={onSelectTool}
        />
      ))}

      <div className="w-full h-px bg-gray-200 my-2" />

      <div className="px-2">
        <div className="flex items-center mb-2">
          <Palette size={16} className="text-gray-400 mr-2" />
          <span className="text-xs font-medium text-gray-500">Colors</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {colors.map((color) => (
            <ColorButton
              key={color}
              color={color}
              selected={color === selectedColor}
              onClick={onSelectColor}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
