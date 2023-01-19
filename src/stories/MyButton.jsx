import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  background-color: ${(props) =>
    !props.disabled ? props.backgroundColor : props.backgroundDisabled};
  border: ${(props) => (!props.disabled ? props.border : "0")};
  cursor: pointer;
  padding: ${(props) => (props.size === "m" ? "5px 12px" : "3px 12px")};
  border-radius: 4px;
  gap: ${(props) => (props.size === "m" ? "5px" : "3px")};

  &: disabled {
    cursor: not-allowed;
  }
`;

const TextButton = styled.span`
  font-family: "Source Sans Pro";
  color: ${(props) =>
    !props.disabled ? props.colorButton : props.backgroundDisabled};
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.size === "m" ? "14px" : "12px")};
  line-height: ${(props) => (props.size === "m" ? "20px" : "130%")};
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export default function MyButton(props) {
  const iconStyle = {
    color: props.colorButton,
    fontSize: props.size === "m" ? "16px" : "14px",
  };

  return (
    <Button {...props} onClick={props.handleClick} disabled={props.disabled}>
      {props.icon ? (
        <SvgIcon style={iconStyle} component={props.icon} inheritViewBox />
      ) : null}
      <TextButton {...props}>{props.content}</TextButton>
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
};
