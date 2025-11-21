"use client"

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
};

const Button = ({ children, disabled, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="rounded-full bg-surface-2 px-6 py-2 font-semibold shadow transition hover:bg-surface-3 cursor-pointer block mx-auto disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}
    </button>
  );
};
export default Button;
