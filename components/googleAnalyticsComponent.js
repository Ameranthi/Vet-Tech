import styles from '../styles/Home.module.css';
import SideBar from '../components/SideBar';
import adminStyles from '../styles/admin.module.css'


import { AnalyticsDashboard } from 'react-analytics-charts';
import { SessionsByDateChart, SessionsGeoChart, ActiveUsersChart, SessionDurationChart, SessionsByDeviceCategoryChart, PageViewsPerPathChart } from 'react-analytics-charts';
/* For more info regarding the React Plugin being utilized for the Google Analytics visit this link:
https://justinmahar.github.io/react-analytics-charts/
*/

/**
 * This is the Google Analytics Component that can be added to pages for Google Analytics Access.
 * @returns {JSX.Element} - Google Analytics Access Button & Further statistics when signed in.
 * @constructor
 */

/* This function initializes the Google Analytics component with the clientID provided from the OAuth Consent Screen
In the Google Analytics API on the Google Cloud Platform.*/
 export default function GoogleAnalyticsComponent() {
    return (
        <div className={styles.container}>           
        <AnalyticsDashboard
        authOptions={{ clientId: "632657422490-au4a2lbqi0jtb3mri2a5l5u9oso6jd4i.apps.googleusercontent.com" }}
        style={{'width': '100%', }}
        
        /*Once a user has signed using the authenticating button, statistic charts will be rendered.
        Current graphs displaying the active users, page views, session duration, type of device and user country origination.
        More graphs can be added by using the custom graphs provided in the React Plugin (Link in top of file) and linking it to a
        event specified.*/

        renderCharts={(gapi, viewId) => {
          return (
            <div className={adminStyles.graphs}>
              
              <div className={adminStyles.graphContainer}>
                <h3>How are your active users trending over time?</h3>
                <p>7 Day Active Users (28 Days)</p>
                <ActiveUsersChart gapi={gapi} viewId={viewId} days={28} activeUserDays={7} options={{title: '', width: '90%'}}/>
              </div>

              <div className={adminStyles.graphContainer}>
              <h3>What pages do your users visit?</h3>
                <p>Page Views per url</p>
                <PageViewsPerPathChart gapi={gapi} viewId={viewId} days={28}/>
              </div>

              <div className={adminStyles.graphContainer}>
              <h3>How long do your users stay on the website?</h3>
                <p>Average Session Duration in Seconds</p>
                <SessionDurationChart gapi={gapi} viewId={viewId} days={28}  options={{title: ''}}/>
              </div>

              <div className={adminStyles.graphContainer}>
              <h3>What are your top devices?</h3>
                <p>Session by Device Category</p>
                <SessionsByDeviceCategoryChart gapi={gapi} viewId={viewId} days={28}  options={{title: ''}}/>
              </div>

              <div className={adminStyles.graphContainer}>
              <h3>Where are your users located?</h3>
                <p>Sessions by Location</p>
                <SessionsGeoChart gapi={gapi} viewId={viewId} days={28} showPageViews />
              </div>
              
            </div>
          )
        }}
      />
        </div>
    )
}
