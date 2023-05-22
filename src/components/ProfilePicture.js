import axios from 'axios';
import {React, useState, useEffect} from 'react'

const ProfilePicture = () => {

  const [profilePicture, setProfilePicture] =useState([]);


  useEffect (() =>{
  axios
    //* request from Profile APIs --> Character Media API --> Character Media Summary  
    .get('https://eu.api.blizzard.com/profile/wow/character/uldaman/thryndil/character-media?namespace=profile-eu&locale=fr_FR&access_token=EUep6QWOZS2SA02BVMIxC3BvVtkbjAsGOo')
    .then((response) => {
      setProfilePicture(response.data.assets[2].value)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])


  return (
    <div 
      className='profilePicture' 
      style={{ 
        backgroundImage: `url(${profilePicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
    </div>
  )
}

export default ProfilePicture;