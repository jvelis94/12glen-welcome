import styles from '../styles/Wifi.module.css'
import homeStyles from '../styles/Home.module.css'

export default function Wifi () {
    return (
        <div className={homeStyles.container}>
            <p>We utilize a mesh wifi system to ensure that you have a strong connection throughout the entire house</p>
            
            <div className={styles.flexDiv}>
                <p>
                    <strong>Wifi SSID: </strong>
                </p>
                <p>12glen</p>
            </div>

            <div className={styles.flexDiv}>
                <p>
                    <strong>Wifi Password: </strong>
                </p>
                <p>bigbasslake</p>
            </div>
        </div>
    )
}