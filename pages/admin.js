import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
//import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar'

/**
 * Creates the Admin page.
 * @returns {JSX.Element} - Admin page.
 * @constructor
 */
export default function Admin() {
    return (
        <div className={styles.container}>
            <Head>
                <title> Admin Dashboard </title>
            </Head>
            <h1> Admin Dash</h1>
        </div>
    )
}

/**
 * Returns the layout of Admin page.
 * @param page
 * @returns {JSX.Element}
 */
Admin.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NavBar isAdmin={true}/>
            {page}
        </Layout>
    )
}
