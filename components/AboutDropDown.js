import React from "react";

const AboutDropDown = ({ madWords }) => {
  return (
    <select
      //   onClick={fixedWord}
      //   name="mad1"
      //   id="mad1"
      //   className="rounded-sm border-[0.3px] w-[160px] border-gray-500"
      className="text-lg"
    >
      <option value="0">{madWords[0]}</option>
      <option value="1"> {madWords[1]}</option>
      <option value="2"> {madWords[2]}</option>
    </select>
  );
};

export default AboutDropDown;
