export const ColorButton = ({ color, selected, onClick }) => (
  <button
    onClick={() => onClick(color)}
    className={`w-8 h-8 rounded-lg border-2 transition-all duration-200 ${
      selected ? "ring-4 ring-indigo-200" : "ring-2 ring-gray-100 hover:ring-4"
    }`}
    style={{ backgroundColor: color, borderColor: "white" }}
  />
);
