import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import css from './loader.module.css';

const CustomLoader = () => {
  return (
    <div className={css.loader}>
      <TailSpin
        className={css.spinner}
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  );
};

export default CustomLoader;
