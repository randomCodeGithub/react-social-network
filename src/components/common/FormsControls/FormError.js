import styles from "../FormsControls/FormsError.module.css";
export const FormError = (props) => {
  return <span className={styles.error}>{props}</span>;
};
