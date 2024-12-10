import React from "react";
import { useStore } from "@nanostores/react";
import { selector } from "../../store/optionsStore";
import Icon from "../common/react/Icon";
import type { OptionsProps } from "../common/types";

const Options: React.FC<OptionsProps> = ({ initialColor }) => {
  const colorOptions = ["", initialColor, "red", "orange", "yellow"];
  const selectorStore = useStore(selector);

  const handleClick = () => {
    const newSelector =
      selectorStore === colorOptions.length - 1 ? 0 : selectorStore + 1;
    selector.set(newSelector);
  };

  return (
    <div
      data-testid="options"
      onClick={handleClick}
      style={{ color: colorOptions[selectorStore] }}
    >
      <Icon name="options" />
    </div>
  );
};

export default Options;
