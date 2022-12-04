import * as React from 'react';
import styles from '../styles/ActivityResults.module.css'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faLocation, faClock, faMapPin } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function ActivityCard(props) {

    return (
        <div className={styles.cardProduct}>
            <div className={styles.cardTitle}>
                <FontAwesomeIcon icon={faImage} style={{ fontSize: 64 }}/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.cardProductInfos}>
                    <div>
                        <small><FontAwesomeIcon icon={faLocation}/> {props.miles} miles | <FontAwesomeIcon icon={faClock}/> {props.minutes} minutes</small>
                    </div>
                    <div>
                        <Link href={`http://maps.google.com/?q${props.address}`}>
                            <a><small>Directions</small></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}