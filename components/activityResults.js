import * as React from 'react';
import styles from '../styles/ActivityResults.module.css'
import { useRouter } from "next/router";
import BarCard from './barCard';
import RestaurantCard from './restaurantCard';
import OutdoorCard from './outdoorCard';
import TourCard from './tourCard';



export default function ActivityResults(props) {
  return (
		<div>
			{props.activeActivity == 'bars' ? props.activityResults.slice(1).map((result, i) => <BarCard key={i} name={result[0]} miles={result[1]} minutes={result[2]} address={result[3]} img={result[4]} /> ) : ''}
			{props.activeActivity == 'restaurants' ? props.activityResults.slice(1).map((result, i) => <RestaurantCard key={i} name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[4]}/> ) : ''}
			{props.activeActivity == 'outdoors' ? props.activityResults.slice(1).map((result, i) => <OutdoorCard key={i} name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[5]}/> ) : ''}
			{props.activeActivity == 'tours' ? props.activityResults.slice(1).map((result, i) => <TourCard key={i} name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[5]}/> ) : ''}
		</div>
  );
}
