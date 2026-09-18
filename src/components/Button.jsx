function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
