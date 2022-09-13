
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'



export default function PrivacyPolicy() {
  return(
    <div className = {styles.container}>
<div className={styles.blogCard}>
    
<h1>Privacy Policy</h1>
<p>Privacy Policy
Privacy Policy
Effective date: January 1, 2022

 
Vet Tech / FetchTeq ("us", "we", or "our") operates the https://ppvt-xu4tpygspa-uc.a.run.app/ website (the "Service").
</p><p>
 

This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy for FetchTeq is powered by FreePrivacyPolicy.com.

 

We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://ppvt-xu4tpygspa-uc.a.run.app/

</p>
<h2>Information Collection And Use</h2>
<p>
We collect several different types of information for various purposes to provide and improve our Service to you.
</p>
 

<h2>Personal Data</h2>

<p> 
While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
 </p> 

<li> Cookies and Usage Data</li>


<h2>Usage Data</h2>
<p>
We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

</p>

 <h2>
Use of Data
</h2>
<p>
FetchTeq uses the collected data for various purposes:

 
<li>
To provide and maintain the Service</li>

<li>To notify you about changes to our Service</li>

<li>To allow you to participate in interactive features of our Service when you choose to do so</li>

<li>To provide customer care and support</li>

<li>To provide analysis or valuable information so that we can improve the Service</li>

<li>To monitor the usage of the Service</li>

<li>To detect, prevent and address technical issues</li>

 
</p>
<h2>
Transfer Of Data
</h2>

<p>
Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.

 

If you are located outside United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to United Kingdom and process it there.

 

Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

 

FetchTeq will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.

Disclosure Of Data
Legal Requirements

 

FetchTeq may disclose your Personal Data in the good faith belief that such action is necessary to:

 </p>

<li>To comply with a legal obligation </li>

<li>To protect and defend the rights or property of FetchTeq</li>

<li>To prevent or investigate possible wrongdoing in connection with the Service</li>

<li>To protect the personal safety of users of the Service or the public</li>

<li>To protect against legal liability</li>

 

<h2>
Security Of Data
</h2>

<p>
The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

Service Providers
We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.

 

These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.

Analytics
We may use third-party Service Providers to monitor and analyze the use of our Service.

 
</p>
<h2>Google Analytics</h2>
<p>

Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.

 

You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.

 

For more information on the privacy practices of Google, please visit the Google Privacy and Terms web page: https://policies.google.com/privacy?hl=en
</p>

<h2>Links To Other Sites</h2>
<p>
Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

 

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
</p>

<h2>Children's Privacy</h2>
<p>Our Service does not address anyone under the age of 18 ("Children").

 

We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.

</p>
<h2>Changes To This Privacy Policy</h2>
<p>
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and update the "effective date" at the top of this Privacy Policy.

 

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

 

If you have any questions about this Privacy Policy, please contact us:

By email: TBA Email address 
</p>

</div>
</div>

  )
}

PrivacyPolicy.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar/>
      {page}
      <Footer/>
    </Layout>
  )
}

