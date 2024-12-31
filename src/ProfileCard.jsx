
function ProfileCard(props) {

    return(
        <div className="profile">
            <h4>ProfileCard of {props.name}</h4>
            <p className="profile-details"><span className="name-span">Name:</span> {props.name}</p>
            <p className="profile-details"><span className="name-span">Age:</span> {props.age}</p>
            <p className="profile-details"><span className="name-span">Bio:</span> {props.bio}</p>
        </div>
    );

}

export default ProfileCard