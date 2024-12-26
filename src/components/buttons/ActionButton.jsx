import React from 'react';

export const ActionButton = ({ icon: Icon, label, primary }) => {
  return (
    <button
      className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        primary
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
};