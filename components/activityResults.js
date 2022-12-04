import * as React from 'react';
import styles from '../styles/ActivityResults.module.css'
import { useRouter } from "next/router";
import ActivityCard from './activityCard';

export default function ActivityResults(props) {
  return (
		<div>
			{props.activityResults.slice(1).map((result, i) => <ActivityCard key={i} name={result[0]} miles={result[1]} minutes={result[2]} address={result[3]} img={result[4]} /> )}
		</div>
  );
}
