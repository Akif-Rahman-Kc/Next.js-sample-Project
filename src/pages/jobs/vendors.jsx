import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return{
        props : { owners : data }
    }
}

const Vendors = ({ owners }) => {
    return ( 
        <>
        <div style={{height:'550px'}} className="main-div">
            <h1>Owners</h1>
            {owners.map(owner=>
                (
                    <div key={owner.id}>
                        <Link style={{textDecoration:'none'}} href={'/jobs/' + owner.id}><h2 className='single'>{owner.name}</h2></Link>
                    </div>
                )
            )}
        </div>
        </>
     );
}
 
export default Vendors;
