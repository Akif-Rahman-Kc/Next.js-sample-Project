
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);

    const paths = data.map(owner => {
        return{
            params: {id: owner.id.toString()}
        }
    })

    return{
        paths,
        fallback:false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return{
        props : { owner : data }
    }
}

const VendorDetails = ({owner}) => {
    return ( 
        <>
        <div className="main-div">
            <h2>{owner.name} ({owner.username})</h2>
            <h5 style={{color:'blue'}}>{owner.email}</h5>
            <h5 style={{color:'blue'}}>{owner.phone}</h5>
            <h5 style={{color:'blue'}}>{owner.website}</h5>
            <h4>Address : </h4>
            <p>Street - {owner.address.street}</p>
            <p>Suite - {owner.address.suite}</p>
            <p>City - {owner.address.city}</p>
            <p>Zipcode - {owner.address.zipcode}</p>
            <h3 style={{color:'green'}}>Company : {owner.company.name}</h3>
        </div>
        </>
     );
}
 
export default VendorDetails;