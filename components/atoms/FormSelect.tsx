import React from "react";

interface IFormSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

const FormSelect: React.FC<IFormSelectProps> = ({ options, ...props }) => {
  return (
    <select className='px-2 py-2 rounded-md border border-primary outline-none bg-transparent'>
      {options.map(option => (
        <option key={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default FormSelect;
