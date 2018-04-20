import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom' 


class TeamNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  redirectToTeamDetails(teamId) {
    return <Redirect to="/teamdetails/" params={{teamId: teamId}}/>
  }
  
  componentDidMount() {
    fetch("https://sourabhmunjal2288.paiza-user.cloud:8080?apiPath=v1/2017/teams.json")
      .then(
        (result) => {
          result.json().then((response) => {
            this.setState({
              isLoaded: true,
              items: response.league.standard,
            });
          }) 
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    var listItem = this.state.items.map((team) => {
      return (
        <Link to={'/teamdetails/' + team.teamId } key={team.teamId}>
          <ListItem primaryText={team.fullName} key={team.teamId} >
          </ListItem>
        </Link>
      )
    });

    return (
      <div className="App">
          <List>
          {
            listItem
          }
          </List>
      </div>
    );
  }
}

export default TeamNames;
