import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import Login from "./Login"
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import SocketProvider from '../contexts/SocketProvider';
import HomePage from './HomePage'
import Navbar from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  // const [id, setId] = useLocalStorage('id');

  // const dashboard = (
  //   <SocketProvider id={id}>
  //     <ContactsProvider>
  //       <ConversationsProvider id={id}>
  //         <Dashboard id={id}/>
  //       </ConversationsProvider>
  //     </ContactsProvider>
  //   </SocketProvider>

  // )

  return (
  // id ? dashboard : <Login onIdSubmit={setId}/>
  <Router>
      <Navbar/>
      <Switch>
        <Route path='/' component={HomePage}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
  </Router>

  )
}

export default App;
