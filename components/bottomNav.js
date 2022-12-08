import * as React from 'react';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faMap, faWifi, faClipboardList, faHome } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from "next/router";


export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  const router = useRouter();

  return (
    <div className={styles.footer}>
        <div className={styles.flexContainer}>
            <Link href="/">
                <a className={ `${styles.card} ${router.pathname == "/" ? "activeTab" : ""}`}>
                    <FontAwesomeIcon icon={faHome} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/wifi">
                <a className={ `${styles.card} ${router.pathname == "/wifi" ? "activeTab" : ""}`}>
                    <FontAwesomeIcon icon={faWifi} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/activities">
                <a className={ `${styles.card} ${router.pathname == "/activities" ? "activeTab" : ""}`}>
                    <FontAwesomeIcon icon={faMap} style={{ fontSize: 28}}/>
                </a>
            </Link>
            <Link href="/faqs">
                <a className={ `${styles.card} ${router.pathname == "/faqs" ? "activeTab" : ""}`}>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{ fontSize: 28}}/>
                </a>
            </Link>
        </div>
    </div>
  );
}
