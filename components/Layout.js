import Head from 'next/head';

/**
 * This defines the layout of webpages. Implemented from https://www.youtube.com/watch?v=LyEc2fGCR90.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Layout({children}){
    return(
        <>
        <Head>
            <title> Layouts </title>
        </Head>
        {children}
        </>
    )
}
