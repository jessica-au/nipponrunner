//Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

//CSS
import './App.css';

//Components
import Welcome from './components/Welcome'
import About from './components/About'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/profile/Profile'
import Footer from './components/Footer'
import ProfileHiraStats from './components/profile/ProfileHiraStats';
import Gakkou from './components/Gakkou/Gakkou' 


//Private routes for logged in users
const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('jwtToken')
  console.log(`>>>> inside a private route`)
  return <Route {...rest} render={(props) => {
    return token ?
      <Component {...rest} /> :
      <Redirect to="/login/" />
  }
  } />
}

//main parent component to render application
function App() {
  //setting state values

  const [currentUser, setCurrentUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    let token; //initializing token variable

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false)
      console.log(`>>>> authentication set to false`)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.getItem('jwtToken'))
      setCurrentUser(token)
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log(`>>>> inside nowCurrentUser func`)
    setCurrentUser(userData)
    setIsAuthenticated(true)
    console.log(`>>>> authentication set to true`)
  }

  const handleLogout = () => {
    console.log(`>>>> inside handleLogout func`)
    if (localStorage.getItem('jwtToken')) {
      //removing token from localStorage for deauth of logged out nonuser
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
      console.log(`>>>> user set to null`)
      console.log(`>>>> authentication set to false`)
    }
  }

  return (
    <div className="App">
      <div className="appNameHeader">
        <div className="englishName">NipponRunner</div> <div className="japaneseName">にっぽんランナー</div> </div>
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="mainContainer">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route
            path='/login'
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />

          <PrivateRoute exact path='/profile' component={Profile} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path='/profile/stats' component={ProfileHiraStats} user={currentUser} handleLogout={handleLogout} />
          
          <PrivateRoute path='/gakkou' component={ Gakkou } user={currentUser} handleLogout={handleLogout} />
          <Route exact path='/' component={Welcome} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
