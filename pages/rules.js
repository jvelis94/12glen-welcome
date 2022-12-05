import styles from '../styles/Rules.module.css'

export default function Description() {
    return (
        <div className={styles.pageContainer}>
            <h3>House Rules</h3>
            <ul>
                <li>10 guests maximum</li>
                <li>Pets allowed</li>
                <li>Check-in after 4:00 PM</li>
                <li>Check-out before 11:00 AM</li>
                <li>No smoking indoors</li>
                <li>Self check-in with smart lock</li>
            </ul>
        </div>
    )
}