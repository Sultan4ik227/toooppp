export function Button({ children, onClick, variant = "default" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition-all ${
        variant === "ghost" ? "bg-transparent text-yellow-400 hover:bg-gray-800" : "bg-yellow-500 text-black"
      }`}
    >
      {children}
    </button>
  );
}
