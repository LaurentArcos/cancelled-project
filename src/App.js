import axios from 'axios';
import {React, useState, useEffect} from 'react'

const App = () => {

  const [profileData, setProfileData ] =useState([]);


  useEffect (() =>{
  axios
    .get('https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=fr_FR&access_token=EUCK6Zj93oPd3aTZa98RKneHRxIbgWtrf2')
    .then((response) => {
      setProfileData(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])


  return (
    <div>{profileData.wow_accounts[0].characters[0].name}</div>
  )
}

export default App;