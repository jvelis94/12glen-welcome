import * as React from 'react';
import styles from '../styles/ActivityResults.module.css'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'


export default function TourCard(props) {
    return (
        <div className={styles.cardProduct}>
            <div>
                <FontAwesomeIcon icon={faBellConcierge} style={{ fontSize: 64 }}/>
            </div>
            <div className="cardProductInfos">
                <h2>Product name</h2>
                <p>Product description with <strong>relevant info</strong> only.</p>
            </div>
        </div>
    )
}