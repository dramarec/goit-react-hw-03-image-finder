import React from 'react';
import styles from './Button.module.css';

const Button = ({ onFetchArticles }) => {
    return (
        <div className={styles.Wrap}>
            <button
                className={styles.Button}
                type="button"
                onClick={onFetchArticles}
            >
                Load more
            </button>
        </div>
    );
};

export default Button;
