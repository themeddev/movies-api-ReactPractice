
const ProfileCard = ({image}) => {
  
    return (

    <div className="card" style={{ width: '18rem' }} key={image.id}>
      <img 
        className="card-img-top" 
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className="card-body">
        <p className="card-">{image.alt_description}</p>
        <a href={image.urls.small} target="_blank" className="mybtn">View</a>
      </div>
    </div>
    
  );
}

export default ProfileCard;
