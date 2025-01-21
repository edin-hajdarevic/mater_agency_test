import { Link, useLocation, useParams } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const user = location.state?.user;

    if(!user) {
        return (
            <div>
                <Link to="/">Back</Link>
                <h1>User data not available.</h1>
            </div>
        );
    }

    return (
        <div className="user-details">
            <Link to="/">Back</Link>
            <h1>User Details</h1>
            <img src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p><span>Title: </span>{user.employment.title}</p>
            <p><span>Email: </span>{user.email}</p>
            <p><span>Phone: </span>{user.phone_number}</p>
            <p><span>Date of Birth: </span>{user.date_of_birth}</p>
            <p><span>City: </span>{user.address.city}</p>
            <p><span>Street Name: </span>{user.address.street_name}</p>
            <p><span>Street Address: </span>{user.address.street_address}</p>
            <p><span>Country: </span>{user.address.country}</p>
            <Link to={`https://www.google.com/maps/place/${user.address.coordinates.lat},${user.address.coordinates.lng}`} 
                className="location-link" 
                target="_blank">
                    Location
            </Link>
        </div>
    );
}

export default UserDetails;