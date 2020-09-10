import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import ChatPage from 'pages/ChatPage'
import LoginPage from 'pages/LoginPage'

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <ChatPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
