import React from "react";
import { Share2, Download, Undo2, Redo2, Save } from "lucide-react";
import { ActionButton } from "./buttons/ActionButton";

export const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          White Board
        </h1>
      </div>

      <div className="flex items-center space-x-2">
        <ActionButton icon={Undo2} label="Undo" />
        <ActionButton icon={Redo2} label="Redo" />
        <div className="w-px h-6 bg-gray-200 mx-2" />
        <ActionButton icon={Save} label="Save" />
        <ActionButton icon={Download} label="Export" />
        <ActionButton icon={Share2} label="Share" primary />
      </div>
    </div>
  );
};
