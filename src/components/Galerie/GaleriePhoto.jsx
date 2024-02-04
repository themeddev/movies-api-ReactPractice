import { useEffect, useState } from "react";
import ProfileCard from "./Card";

const GaleriePhoto = () => {

    const [photos , setPhotos] = useState([])

    const API_URL = 'https://api.unsplash.com/photos/?client_id='
    const API_KEY = 'BiDX-TS3Z8BICBIPCd6TSAuRMZEfY4RTlv7FS7TDp8o'

    const API = API_URL + API_KEY

    useEffect(() => {
        fetch(API).then(
            response => response.json()
        ).then(
            data => setPhotos(data),    
            console.log(photos)   
        )
    },[photos])
    
    return ( 
        <>
            {photos.map( image => (
            
                <ProfileCard image={image} />
           
           ))}

        </>

     );
}
 
export default GaleriePhoto;