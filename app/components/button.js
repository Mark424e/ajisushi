import React from "react";

export const Button = ({
  onClick, // Function to handle button click
  children, // Text or elements inside the button
  type = "button", // Type of button (e.g. 'button', 'submit', 'reset')
  disabled = false, // Whether the button is disabled
}) => {
  return (
    <button className="w-full mt-6 text-secondary p-2 rounded transition relative inline-block px-6 py-2 font-medium border-2 border-secondary group hover:text-white duration-300"
      type={type} 
      onClick={onClick} 
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-full h-full bg-secondary transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
    </button>
  );
};
