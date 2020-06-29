import Head from 'next/head';
import Navbar from './Navbar';
const Layout = (props) => (
    <div>
        <Head>
            <title>Practice</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        </Head>
        <Navbar/> 
        <div class="container">
        {props.children}
            
        </div>
    </div>
);      

export default Layout