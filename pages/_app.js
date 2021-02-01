import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar';

import FacebookPixel from '../components/FacebookPixel';

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title> Qore XM </title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap"
                />
            </Head>

            <FacebookPixel>
                <Component {...pageProps} />
            </FacebookPixel>
        </>
    );
}

export default MyApp;
