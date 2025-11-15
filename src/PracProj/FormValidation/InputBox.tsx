import React from "react";

const InputBox = ({ type, value, name, handleChange }: any) => {
  return (
    <div>
      <input
        className="border outline-0"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
