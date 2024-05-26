import styles from "./backbuttoncontainer.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const BackButtonContainer = () => {
  return (
    <div className={`${styles.body} p-3`}>
      <IoArrowBackCircleOutline onClick={() => window.history.back()} />
    </div>
  );
};

export default BackButtonContainer;
