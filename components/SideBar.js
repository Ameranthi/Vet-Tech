import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faPlusSquare, faSignOutAlt, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

const SideNav = styled.nav`
height: 80px;
padding: 15px;
background: var(--primary-color);
font-size: 18px;
color: #fff;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font: roboto;
`;

/**
 * This is an admin sidebar menu. Currently, only used in admin for admin purposes.
 * @returns {JSX.Element}
 * @constructor
 */
function SideBar() {
  return (
    <div className= {styles.navcontainer}>
      <div className = {styles.logo}>
        <h3> Vet Tech Admin </h3>
        </div>
      <div className = {styles.wrapper}>
        <ul>
          <li> <FontAwesomeIcon icon={faTachometerAlt} style={{width:"18px", cursor: "pointer"}}/>
            <a href = "/admin" > Dashboard</a></li>
          <li><FontAwesomeIcon icon={faPlusSquare} style={{width:"18px", cursor: "pointer"}}/>
            <a href = "#" > Create New Questions</a></li>
          {/* allow editing, deleting of questions */}
          <li><FontAwesomeIcon icon={faWrench} style={{width:"18px", cursor: "pointer"}}/>
            <a href = "#" > Manage Questions</a></li> 
            <li><FontAwesomeIcon icon={faWrench} style={{width:"18px", cursor: "pointer"}}/>
            <a href = "/analytics" > Access Google Analytics</a></li> 
          <li><FontAwesomeIcon icon={faCogs} style={{width:"18px", cursor: "pointer"}}/>
            <a href = "#" > Settings </a>
          </li>
          <li><FontAwesomeIcon icon={faSignOutAlt} style={{width:"18px", cursor: "pointer"}}/>
            <a href = "#" > Logout </a></li>
        </ul>
      </div>
      </div>
    
  )
}

export default SideBar
