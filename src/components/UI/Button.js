import styles from "./Button.module.scss";

const Button = function (props) {
  return (
    <button className={`${styles.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
