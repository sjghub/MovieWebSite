import propTypes from "prop-types";
import styled from "./Button.module.css";
function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};
export default Button;
