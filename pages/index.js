import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleQuestion, faHouse, faMap, faMessage, faQuestion, faSign, faWifi } from '@fortawesome/free-solid-svg-icons'
import { BottomNavigation } from '@mui/material'
import BottomNav from '../components/bottomNav'
import glensidePic from '../public/12glen_front.webp'

export default function Home() {
  return (
    <div className={styles.gridHomeContainer}>
      <Head>
        <title>12 Glenside Drive</title>
        <meta name="description" content="12 Glenside Drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topContainer}>
        <Image 
          src={glensidePic}
          alt="Picture of the house"
          />
      </div>
      <div>
        <p>Body</p>
      </div>
    </div>
  )
}
