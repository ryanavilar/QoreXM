import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Loggedin(props: {title: string; user: any; content: React.ReactNode; active: string}) {
    return (
        <>
            <Head>
                <title> {props.title} </title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap"
                />
            </Head>

            <Navbar user={props.user} active={props.active} content={<>{props.content}</>} />
        </>
    );
}
