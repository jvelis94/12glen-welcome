import { useState } from 'react';
import ActivityResults from '../components/activityResults';
import styles from '../styles/Activities.module.css';
import BarCard from '../components/barCard';
import RestaurantCard from '../components/restaurantCard';
import OutdoorCard from '../components/outdoorCard';
import TourCard from '../components/tourCard';


export default function Activities({data}) {
    const activities = data.activities
    const [activeActivity, setActiveActivity] = useState('bars')
    const [activityResults, setActivityResults] = useState(activities.bars)
    

    const setBarsActivities = (e) => {
        e.preventDefault()
        setActiveActivity('bars')
        setActivityResults(activities.bars)
    }

    const setRestaurantsActivities = (e) => {
        e.preventDefault()
        setActiveActivity('restaurants')
        setActivityResults(activities.restaurants)
    }

    const setOutdoorsActivities = (e) => {
        e.preventDefault()
        setActiveActivity('outdoors')
        setActivityResults(activities.outdoors)
    }

    const setToursActivities = (e) => {
        e.preventDefault()
        setActiveActivity('tours')
        setActivityResults(activities.tours)
    }


    return (
        <div>
            <div>
                <h3 className={styles.pageHeader}>Activies</h3>
            </div>
            <div className={styles.activitiesContainer}>
                <ul className={styles.activitiesNav}>
                    <li className={activeActivity == 'bars' ? styles.activeTab : ''} onClick={setBarsActivities}>Bars</li>
                    <li className={activeActivity == 'restaurants' ? styles.activeTab : ''} onClick={setRestaurantsActivities}>Restaurants</li>
                    <li className={activeActivity == 'outdoors' ? styles.activeTab : ''} onClick={setOutdoorsActivities}>Outdoors</li>
                    <li className={activeActivity == 'tours' ? styles.activeTab : ''} onClick={setToursActivities}>Tours</li>
                </ul>
            </div>
            <div>
                {activityResults.map((result,i) => <BarCard key={i} name={result[0]} miles={result[1]} minutes={result[2]} address={result[3]} img={result[4]} /> ) && activeActivity == 'bars' }
                {activityResults.map((result,i) => <RestaurantCard key={i} name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[4]}/> ) && activeActivity == 'resturants' }
                {activityResults.map((result,i) => <OutdoorCard key={i} name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[5]}/> ) && activeActivity == 'outdoors' }
                {activityResults.map((result,i) => <TourCard key={i} name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[5]}/> ) && activeActivity == 'tours'}
                
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