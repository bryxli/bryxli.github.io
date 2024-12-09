import React, { useState } from "react";
import Icon from "../common/react/Icon";
import type { OptionsProps } from "../common/types";

const Options: React.FC<OptionsProps> = ({ initialColor }) => {
  const colorOptions = ["", initialColor, "red", "orange", "yellow"];
  const [selector, setSelector] = useState(0);

  const handleClick = () => {
    const newSelector = selector === colorOptions.length - 1 ? 0 : selector + 1;
    setSelector(newSelector);
  };

  return (
    <div onClick={handleClick} style={{ color: colorOptions[selector] }}>
      <Icon name="options" />
    </div>
  );
};

export default Options;
