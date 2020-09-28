import React from "react";
import styles from "../styles/Loading.module.css";

// https://tobiasahlin.com/spinkit/

const SuspenseLoader = () => {
  const {
    loader,
    sk_cube_grid,
    sk_cube,
    sk_cube1,
    sk_cube2,
    sk_cube3,
    sk_cube4,
    sk_cube5,
    sk_cube6,
    sk_cube7,
    sk_cube8,
    sk_cube9,
  } = styles;

  return (
    <div className={loader}>
      <div className={sk_cube_grid}>
        <div className={`${sk_cube} ${sk_cube1}`} />
        <div className={`${sk_cube} ${sk_cube2}`} />
        <div className={`${sk_cube} ${sk_cube3}`} />
        <div className={`${sk_cube} ${sk_cube4}`} />
        <div className={`${sk_cube} ${sk_cube5}`} />
        <div className={`${sk_cube} ${sk_cube6}`} />
        <div className={`${sk_cube} ${sk_cube7}`} />
        <div className={`${sk_cube} ${sk_cube8}`} />
        <div className={`${sk_cube} ${sk_cube9}`} />
      </div>
    </div>
  );
};
export default SuspenseLoader;
