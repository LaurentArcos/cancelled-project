import axios from 'axios';
import {React, useState, useEffect} from 'react'

const Character = () => {
  const [profileName, setProfileName ] =useState([]);

  useEffect (() =>{
  axios
    // request from Profile APIs --> Character Appearance API --> Character Appearance Summary  
    .get('https://eu.api.blizzard.com/profile/wow/character/uldaman/thryndil/appearance?namespace=profile-eu&locale=fr_FR&access_token=EUZYb7BaKFW8Z2xtnEZKiAwxiw7ZJtPsEj')
    .then((responseName) => {
      console.log(responseName);
      setProfileName(responseName.data.character.name);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])


  return (
      <div className='name'>{profileName}</div>
  )
}

export default Character;