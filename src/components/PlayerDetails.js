import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import players from './players';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class PlayerDetails extends Component {
  // constructor(props) {
    // super(props);
    state = {
      error: null,
      isLoaded: false,
      stats: []
    };
    players = players;
    // console.log(players);
  // }
  
  componentDidMount() {
    const playerId = this.props.match.params.playerId;
    fetch(`https://sourabhmunjal2288.paiza-user.cloud:8080?apiPath=v1/2017/players/${playerId}_profile.json`)
      .then(
        (result) => {
          console.log(players);
          result.json().then((response) => {
            this.setState({
              isLoaded: true,
              stats: response.league.standard.stats.latest,
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

    return (
			<div style={styles.root}>
				<GridList cellHeight={180}
				          cols={3}
				          padding={10}
				          style={styles.gridList}>

				  <GridTile
			      key={this.state.stats.gamesPlayed}
			      title="Games Played"
			      subtitle={<span><b>{this.state.stats.gamesPlayed}</b></span>}>
				      <img src={require("../images/GamesPlayed.jpg")} alt="Games Played" />
				  </GridTile>

				  <GridTile
			      key={this.state.stats.points}
			      title="Points"
			      subtitle={<span><b>{this.state.stats.points}</b></span>}>
				      <img src={require("../images/Points.jpg")} alt="Games Played" />
				  </GridTile>
				  <GridTile
			      key={this.state.stats.blocks}
			      title="Blocks"
			      subtitle={<span><b>{this.state.stats.blocks}</b></span>}>
				      <img src={require("../images/Blocks.jpg")} alt="Assists" />
				  </GridTile>

				  <GridTile
			      key={this.state.stats.assists}
			      title="Steals"
			      subtitle={<span><b>{this.state.stats.steals}</b></span>}>
				      <img src={require("../images/Steals.jpg")} alt="Assists" />
				  </GridTile>

				  <GridTile
			      key={this.state.stats.assists}
			      title="Turnovers"
			      subtitle={<span><b>{this.state.stats.assists}</b></span>}>
				      <img src={require("../images/Turnovers.jpg")} alt="Turnovers" />
				  </GridTile>

				  <GridTile
			      key={this.state.stats.totReb}
			      title="Total Rebounds"
			      subtitle={<span><b>{this.state.stats.totReb}</b></span>}>
				      <img src={require("../images/Rebounds.jpg")} alt="Turnovers" />
				  </GridTile>

				</GridList>
			</div>
    );
  }
}

export default PlayerDetails;
