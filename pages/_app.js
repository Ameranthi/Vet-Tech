import '../styles/globals.css';

/**
 * Used to define the layout of pages. Defines layout define at the page level if available.
 * @param Component
 * @param pageProps
 * @returns {*}
 * @constructor
 */
export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
  
    return getLayout(<Component {...pageProps} />)
  }
