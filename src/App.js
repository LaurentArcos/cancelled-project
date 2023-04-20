import axios from 'axios';
import {React, useState, useEffect} from 'react'

const App = () => {

  const [profileName, setProfileName ] =useState([]);


  useEffect (() =>{
  axios
    .get('https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=fr_FR&access_token=EUCK6Zj93oPd3aTZa98RKneHRxIbgWtrf2')
    .then((response) => {
      setProfileName(response.data.wow_accounts[0].characters[0].name);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])


  return (
    <div>{profileName}</div>
  )
}

export default App;