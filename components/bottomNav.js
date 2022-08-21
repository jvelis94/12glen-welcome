import * as React from 'react';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleQuestion, faHouse, faMap, faBars, faQuestion, faSign, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.footer}>
        <div className={styles.flexContainer}>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: 28}}/>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <FontAwesomeIcon icon={faWifi} style={{ fontSize: 28}}/>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <FontAwesomeIcon icon={faMap} style={{ fontSize: 28}}/>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <FontAwesomeIcon icon={faCircleExclamation} style={{ fontSize: 28}}/>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <FontAwesomeIcon icon={faCircleQuestion} style={{ fontSize: 28}}/>
            </a>
        </div>
    </div>
  );
}
