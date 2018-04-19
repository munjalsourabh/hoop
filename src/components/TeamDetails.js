import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import players from './players';
import { Link } from 'react-router-dom';

class TeamDetails extends Component {
  // constructor(props) {
    // super(props);
    state = {
      error: null,
      isLoaded: false,
      items: []
    };
    players = players;
    // console.log(players);
  // }
  
  componentDidMount() {
    const teamId = this.props.match.params.teamId;
    fetch("https://sourabhmunjal2288.paiza-user.cloud:8080?apiPath=v1/2017/teams/" + teamId + "/roster.json")
      .then(
        (result) => {
          console.log(players);
          result.json().then((response) => {
            this.setState({
              isLoaded: true,
              items: response.league.standard.players,
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

  getPlayer = () => {
    return  this.players;
  }

  render() {
    let listItem = this.state.items.map(function(player) {
      if (this.getPlayer()['players'][player['personId']]) {
        const playerName = this.getPlayer()['players'][player['personId']]['firstName'] + ' ' +
            this.getPlayer()['players'][player['personId']]['lastName']
        return (
          <Link to={'/playerdetails/' + player.personId } key={player.personId}>
            <ListItem primaryText={playerName} key={player.personId}/>
          </Link>
        )
      }
    }.bind(this));

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

export default TeamDetails;
