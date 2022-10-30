import React from "react";

interface IButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  disabled?: boolean;
  type?: string;
}

const Button: React.FC<IButtonProps> = ({
  label,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <input
      className={`w-full bg-button py-1.5 text-base rounded-full font-medium text-white ${
        disabled
          ? "bg-opacity-10 text-neutral cursor-not-allowed"
          : " text-white cursor-pointer"
      } ${className}`}
      onClick={props.onClick}
      type={type}
      value={label}
    />
  );
};

export default Button;
