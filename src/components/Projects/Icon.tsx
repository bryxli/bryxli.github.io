import React from "react";
import type { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default Icon;
