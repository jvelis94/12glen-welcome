import { useState } from 'react'
import styles from '../styles/Activities.module.css'

export default function Activities({data}) {
    const [activeActivity, setActiveActivity] = useState('bars')
    const activities = data.activities
    console.log(activities)
    console.log(activities.bars)



    return (
        <div>
            <div>
                <h3 className={styles.pageHeader}>Activies</h3>
            </div>
            <div className={styles.activitiesContainer}>
                <ul className={styles.activitiesNav}>
                    <li className={activeActivity == 'bars' ? styles.activeTab : ''} onClick={() => setActiveActivity('bars')}>Bars</li>
                    <li className={activeActivity == 'restaurants' ? styles.activeTab : ''} onClick={() => setActiveActivity('restaurants')}>Restaurants</li>
                    <li className={activeActivity == 'outdoors' ? styles.activeTab : ''} onClick={() => setActiveActivity('outdoors')}>Outdoors</li>
                    <li className={activeActivity == 'tours' ? styles.activeTab : ''} onClick={() => setActiveActivity('tours')}>Tours</li>
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const bars_data = await (await fetch('http://localhost:3000/api/bars-sheet')).json()
    const restaurants_data = await (await fetch('http://localhost:3000/api/restaurants-sheet')).json()
    const outdoors_data = await (await fetch('http://localhost:3000/api/outdoors-sheet')).json()
    const tours_data = await (await fetch('http://localhost:3000/api/tours-sheet')).json()

    return {
        props: {
            data: {
                activities: {
                    bars: bars_data.data,
                    restaurants: restaurants_data.data,
                    outdoors: outdoors_data.data,
                    tours: tours_data.data
                }
            }
        }
    }
}