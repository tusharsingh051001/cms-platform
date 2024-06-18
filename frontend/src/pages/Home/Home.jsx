// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={`${styles.body} flex items-center justify-center`}>
      <div className={`flex justify-center flex-col p-6`}>
        <div className={`mb-4 ${styles.linkContainer}`}>
          If you want to file a New Claim 👉:{" "}
          <Link to={"/new-claim"}>New Claim</Link>
        </div>
        <div className={`mb-4 ${styles.linkContainer}`}>
          If you want to <u>update</u> your Existing Claim 👉:{" "}
          <Link to={"/existing-claim"}>Existing Claim</Link>
        </div>
        <div className={`mb-4 ${styles.linkContainer}`}>
          If you want to <u>view</u> your Existing Claim 👉:{" "}
          <Link to={"/view-claim"}>View Claim</Link>
        </div>
        <div className={`mb-4 ${styles.linkContainer}`}>
          If you want to <u>delete</u> your Existing Claim 👉:{" "}
          <Link to={"/delete-claim"}>Delete Claim</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
