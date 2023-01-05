import { useState } from 'react'
import ActivityResults from '../components/activityResults'
import styles from '../styles/Activities.module.css'


export default function Activities({data}) {
    const [activeActivity, setActiveActivity] = useState('bars')
    const activities = data.activities
    
    let activityResults = activities.bars
    switch(activeActivity) {
        case 'bars':
            activityResults = activities.bars
            break;
        case 'restaurants':
            activityResults = activities.restaurants
            break;
        case 'outdoors':
            activityResults = activities.outdoors
            break;
        case 'tours':
            activityResults = activities.tours
            break
        default:
            activityResults = activities.bars
    }



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
            <div>
                <ActivityResults activeActivity={activeActivity} activityResults={activityResults} />
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    // const env = process.env.NODE_ENV
    // const domain = env == "development" ? "http://localhost:3000" : "https://12glen-welcome.vercel.app/"
    // const bars_data = await (await fetch(`${domain}/api/bars-sheet`)).json()
    // const restaurants_data = await (await fetch(`${domain}/api/restaurants-sheet`)).json()
    // const outdoors_data = await (await fetch(`${domain}/api/outdoors-sheet`)).json()
    // const tours_data = await (await fetch(`${domain}/api/tours-sheet`)).json()
    const fs = require("fs");
    const { parse } = require("csv-parse");

    async function readFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', function (err, data) {
            parse(data, {columns: false, trim: true}, function(err, rows) {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            })
            });
        });
    }
    let bars_data = await readFile("./data/csv/bars.csv");
    let restaurants_data = await readFile("./data/csv/restaurants.csv");
    let outdoors_data = await readFile("./data/csv/outdoor_activities.csv");
    let tours_data = await readFile("./data/csv/tours.csv");

    return {
        props: {
            data: {
                activities: {
                    bars: bars_data,
                    restaurants: restaurants_data,
                    outdoors: outdoors_data,
                    tours: tours_data
                }
            }
        }
    }
}