import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import styled from "styled-components";

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
  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    background-color: ${!disabled ? backgroundColor : backgroundDisabled};
    border: ${!disabled ? border : "0"};
    cursor: pointer;
    padding: ${size === "m" ? "5px 12px" : "3px 12px"};
    border-radius: 4px;
    gap: ${size === "m" ? "5px" : "3px"};

    &: disabled {
      cursor: not-allowed;
    }
  `;

  const TextButton = styled.span`
    font-family: "Source Sans Pro";
    color: ${!disabled ? colorButton : backgroundDisabled}
    font-style: normal;
    font-weight: 600;
    font-size: ${size === "m" ? "14px" : "12px"};
    line-height: 20px ${size === "m" ? "20px" : "130%"};
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
  `;

  const iconStyle = {
    color: iconColor,
    fontSize: iconFontSize,
  };

  return (
    <Button onClick={handleClick} disabled={disabled}>
      {icon ? (
        <SvgIcon style={iconStyle} component={icon} inheritViewBox />
      ) : null}
      <TextButton>{content}</TextButton>
    </Button>
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
