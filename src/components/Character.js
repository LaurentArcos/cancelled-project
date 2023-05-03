import axios from 'axios';
import {React, useState, useEffect} from 'react'

const Character = () => {

  const [profileName, setProfileName ] =useState([]);
  const [race, setRace ] =useState([]);
  const [characterClass, setCharacterClass ] =useState([]);

  useEffect (() =>{
  axios
    // request from Profile APIs --> Character Appearance API --> Character Appearance Summary  
    .get('https://eu.api.blizzard.com/profile/wow/character/uldaman/thryndil/appearance?namespace=profile-eu&locale=fr_FR&access_token=EUZYb7BaKFW8Z2xtnEZKiAwxiw7ZJtPsEj')
    .then((response) => {
      setProfileName(response.data.character.name);
      setRace(response.data.playable_race.name);
      setCharacterClass(response.data.playable_class.name);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])


  return (
    <div className='character'>
      <div className='name'>{profileName}</div>
      <div className='raceAndClass'>{race} / {characterClass}</div>
    </div>
  )
}

export default Character;