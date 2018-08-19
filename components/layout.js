import Navbar from './navbar';
import Head from 'next/head';

// Layout component - this is just to make all pages look the same

const Layout = (props) => (
    <div>
        <Head>
            <title>My title!</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>
        <Navbar />
        <div className = 'container'>
        {props.children}
        </div>
    </div >
);

export default Layout;