import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TeamNames from './TeamNames'
import TeamDetails from './TeamDetails'
import PlayerDetails from './PlayerDetails'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/teamnames' component={TeamNames} />
      <Route exact path='/teamdetails/:teamId' component={TeamDetails} />
      <Route exact path='/playerdetails/:playerId' component={PlayerDetails} />
    </Switch>
  </main>
)

export default Main