import * as React from 'react';
import styles from '../styles/ActivityResults.module.css'
import { useRouter } from "next/router";


export default function BarCard(props) {
    return (
        <div className={styles.cardProduct}>
            <img src={props.img} />
            <div className="cardProductInfos">
                <h2>{props.name}</h2>
                <p>{props.type}</p>
            </div>
        </div>
    )
}