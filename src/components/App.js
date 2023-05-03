import {React} from 'react'
import Character from './Character';
import ProfilePicture from './ProfilePicture';
import Header from './Header';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {

  return (
    <div>
      <Header />
      <Character />
      <ProfilePicture />
    </div>
  )
}

export default App;