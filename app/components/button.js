import React, { useState, useCallback } from "react";

export const Button = ({
  onClick,
  children,
  type = "button",
  disabled = false,
}) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = useCallback((event) => {
    if (isBouncing) return;

    setIsBouncing(true);
    
    const animationDuration = 200;
    setTimeout(() => {
      setIsBouncing(false);
    }, animationDuration);

    if (onClick) {
      onClick(event);
    }
  }, [isBouncing, onClick]);
  return (
    <button
      className={`w-full mt-6 text-secondary p-2 rounded transition relative inline-block px-6 py-2 font-medium border-2 border-secondary group hover:text-white duration-300 ${isBouncing ? 'bounce' : ''}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-full h-full bg-secondary transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
    </button>
  );
};
