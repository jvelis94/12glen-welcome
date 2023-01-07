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
    <div className={styles.homeContainer}>
      <Head>
        <title>12 Glenside Drive</title>
        <meta name="description" content="12 Glenside Drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topContainer}>
      <h1 className={styles.title}>
          Welcome to our Big Bass Lake Chalet
        </h1>
      </div>
      <div className={styles.description}>
        <h3 className={styles.titles}>Summary</h3>
        <p>
          Come visit the mountains! You are invited to enjoy this perfect little chalet tucked away inside the Award Winning &amp; Gold Star Certified Premier community of Big Bass Lake located in the Pocono Mountains. 
        </p>
        <p>
          This 4-bedroom, 2 bathroom home is the perfect getaway! The home is equipped with a full kitchen and dining area, and a spacious living room. One of the highlights of the property is the backyard oasis, featuring a gorgeous newly installed Hot Tub which fits up to 7 guests!
        </p>
        <b/>
        <h3 className={styles.titles}>House Features</h3>
        <small>✔ Mesh WiFi for strong access throughout the entire house</small>

        <h4 className={styles.titles}>First Floor</h4>
        <small>✔ Fully Equipped Kitchen</small><br/>
        <small>✔ Washer and Dryer</small><br/>
        <small>✔ 1 bedroom with a Queen sized bed and closet space</small><br/>
        <small>✔ Outdoor deck with seating and a grill</small><br/>
        <small>✔ Brand new Hot Tub (fit for 5-7 people)</small><br/>
        <small>✔ Fire pit in the front lawn</small><br/>
        <small>✔ Living room with Smart TV and 2 Cordaroy&apos;s Chairs that convert into Full sized beds</small><br/>

        <h4 className={styles.titles}>Second Floor</h4>
        <small>✔ 1 bedroom with a Queen sized bed</small><br/>
        <small>✔ 1 bedroom with a Queen bed and a slide-out twin bed</small><br/>
        <small>✔ 1 bedroom with a full-sized bed</small><br/>
        <small>✔ Dedicated working space with desk and lamp</small><br/>

        <h4 className={styles.titles}>Kitchen and Dining</h4>
        <small>✔ Microwave</small><br/>
        <small>✔ Stove</small><br/>
        <small>✔ Oven</small><br/>
        <small>✔ Refrigerator/Freezer</small><br/>
        <small>✔ Dishwasher</small><br/>
        <small>✔ Trays</small><br/>
        <small>✔ Wine Glasses</small><br/>
        <small>✔ Silverware</small><br/>
        <small>✔ Pots &amp; Pans</small><br/>
        <small>✔ Basic spices for cooking meals</small><br/>
      </div>
    </div>
  )
}
