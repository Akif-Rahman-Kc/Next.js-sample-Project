import Link from "next/link";

const Navbar = () => {
    return ( 
        <>
        <nav style={{width:'98%',backgroundColor:'lightgray',padding:'15px',display:"flex"}}>
            <img style={{marginRight:'auto',width:'38px'}} src="/sports-football-1.2.jpg" alt="" />

            {/* <Image src='/sports-football-1.2.jpg'  width={38} height={38}/>    this one is using to gives width & hight time */}

            <a style={{marginRight:'auto',fontSize:'35px',fontFamily:'fantasy'}}>JOB CIRCLE</a>
            <div style={{display:'flex',justifyContent:'space-between',width:'20%',padding:'10px',fontWeight:'bolder'}}>
                <Link style={{color:'black',textDecoration:'none'}} href='/'>Home</Link>
                <Link style={{color:'black',textDecoration:'none'}} href='/jobs'>Jobs</Link>
                <Link style={{color:'black',textDecoration:'none'}} href='/about'>About</Link>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;