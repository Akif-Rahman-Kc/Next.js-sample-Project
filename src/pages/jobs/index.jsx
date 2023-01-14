import Link from "next/link";

const Profile = () => {
    return ( 
        <>
        <div className="main-div">
            <Link href='/jobs/vendors'><button className="Buttons">Drivers</button></Link>
            <Link href='/jobs/vendors'><button className="Buttons">Designer</button></Link>
            <Link href='/jobs/vendors'><button className="Buttons">Plumber</button></Link>
            <Link href='/jobs/vendors'><button className="Buttons">Barber</button></Link>
        </div>
            
        </>
     );
}
 
export default Profile;