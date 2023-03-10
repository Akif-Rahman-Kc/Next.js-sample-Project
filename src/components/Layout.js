import Head from "next/head";
import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";

const Layout = ({ children }) => {
    return ( 
        <>
        <Head>
            <title>Job Circle</title>
        </Head>
        <Navbar/>
        {children}
        <Footer/>
        </>
     );
}
 
export default Layout;