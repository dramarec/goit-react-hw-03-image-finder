import React from 'react';
import styles from './Loader.module.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
    return (
        <div className={styles.loader}>
            <Loader type="Audio" color="#3f51b5" height={50} width={150} />
        </div>
    );
};

export default Spinner;
