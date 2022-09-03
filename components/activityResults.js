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
			{props.activeActivity == 'bars' ? props.activityResults.map(result => <BarCard name={result[0]} miles={result[1]} minutes={result[2]} address={result[3]} img={result[4]} /> ) : ''}
			{props.activeActivity == 'resturants' ? props.activityResults.map(result => <RestaurantCard name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[4]}/> ) : ''}
			{props.activeActivity == 'outdoors' ? props.activityResults.map(result => <OutdoorCard name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[5]}/> ) : ''}
			{props.activeActivity == 'tours' ? props.activityResults.map(result => <TourCard name={result[0]} type={result[1]} miles={result[2]} minutes={result[3]} address={result[4]} img={result[5]}/> ) : ''}
		</div>
  );
}
