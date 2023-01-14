import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => {
            // router.go(-1)               Its going to backword one time 
            // router.go(1)               Its going to forward one time 
            router.push('/')               //Its going to redirect this rout
        }, 3000);
    },[])

    return ( 
        <>
        <div style={{textAlign:'center'}} className="main-div">
            <h1>Oooops......</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the<Link href='/'> Home Page</Link></p>
        </div>
        </>
     );
}
 
export default NotFound;