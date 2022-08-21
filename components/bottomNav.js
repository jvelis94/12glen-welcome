import * as React from 'react';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleQuestion, faHouse, faMap, faBars, faQuestion, faSign, faWifi } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.footer}>
        <div className={styles.flexContainer}>
            <Link href="/description">
                <a className={styles.card}>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/wifi">
                <a className={styles.card}>
                    <FontAwesomeIcon icon={faWifi} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/neighborhood">
                <a className={styles.card}>
                    <FontAwesomeIcon icon={faMap} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/rules">
                <a className={styles.card}>
                    <FontAwesomeIcon icon={faCircleExclamation} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/faqs">
                <a className={styles.card}>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{ fontSize: 28}}/>
                </a>
            </Link>
        </div>
    </div>
  );
}
