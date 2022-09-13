import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
//import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar'
import GoogleAnalyticsComponent from '../components/googleAnalyticsComponent';

export default function Analytics() {
    return (
        <div className={styles.container}>
            <Head>
                <title> Google Analytics Overview </title>
            </Head>
            <h1> Google Analytics Overview</h1>
        </div>
    )
}

Analytics.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NavBar isAdmin={true}/>
            {page}
            <div style={{'padding': '50px'}}>
                 <GoogleAnalyticsComponent/>
             </div>
        </Layout>
        
    )
}