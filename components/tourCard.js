import * as React from 'react';
import styles from '../styles/ActivityResults.module.css'
import { useRouter } from "next/router";


export default function TourCard(props) {
    return (
        <div className={styles.cardProduct}>
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
            <div className="cardProductInfos">
                <h2>Product name</h2>
                <p>Product description with <strong>relevant info</strong> only.</p>
            </div>
        </div>
    )
}