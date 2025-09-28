import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white font-semibold ${sizeClasses[size]} ${shape} shadow hover:bg-blue-700 transition-colors duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
