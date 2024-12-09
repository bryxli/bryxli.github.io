import React from "react";
import Icon from "../common/react/Icon";

const click = () => {
  alert("Under Construction");
};

const Options: React.FC = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.firstChild as HTMLElement).style.color = "#00bcd4";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.firstChild as HTMLElement).style.color = "";
      }}
      onClick={click}
    >
      <Icon name="options" nametag={false} />
    </div>
  );
};

export default Options;
