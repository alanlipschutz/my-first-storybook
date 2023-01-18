import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import "../style.css";

export default function MyButton({
  content,
  icon,
  size = "m",
  disabled = false,
  backgroundColor = "white",
  backgroundDisabled = "rgba(87, 96, 121, 0.6)",
  handleClick,
  border = "0",
  colorButton = "#151724",
  iconColor = colorButton,
  iconFontSize = "1rem",
}) {
  const style = {
    backgroundColor: !disabled ? backgroundColor : backgroundDisabled,
    border: !disabled ? border : "0",
    borderRadius: "4px",
  };

  const iconStyle = {
    color: iconColor,
    fontSize: iconFontSize,
  };

  const styleButton = {
    color: !disabled ? colorButton : backgroundDisabled,
  };
  return (
    <button
      onClick={handleClick}
      style={style}
      className={`button ${size === "m" ? "button-m" : "button-s"}`}
      disabled={disabled}
    >
      {icon ? (
        <SvgIcon style={iconStyle} component={icon} inheritViewBox />
      ) : null}
      <span
        style={styleButton}
        className={size === "m" ? "button-content-m" : "button-content-s"}
      >
        {content}
      </span>
    </button>
  );
}

MyButton.propTypes = {
  content: PropTypes.string,
  size: PropTypes.oneOf(["m", "s"]),
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backgroundDisabled: PropTypes.string,
  border: PropTypes.string,
  handleClick: PropTypes.func,
  colorButton: PropTypes.string,
  iconColor: PropTypes.string,
  iconFontSize: PropTypes.string,
};
