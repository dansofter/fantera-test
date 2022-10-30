import React from "react";

interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  label?: string;
}

const FormInput: React.FC<IFormInputProps> = ({
  placeholder = "",
  className = "",
  label = "",
  id,
  name,
  type,
  ...props
}) => {
  const classes =
    type === "text" || type === "number" || type === "password"
      ? `px-2 py-2 rounded-md border border-gray outline-none bg-transparent ${className}`
      : className;

  return (
    <div className='flex items-center gap-2 mb-1'>
      <input
        id={id}
        name={name}
        type={type}
        className={classes}
        placeholder={placeholder}
        {...props}
      />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
