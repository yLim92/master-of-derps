var Game = React.createClass({
  getInitialState: function() {
    return {
      phase: "playerSelect",
      selectedPlayer: 0,
      selectedAbility: null,
    }
  },
  changeSelectedPlayer: function(e) {
    var newSelected = e.currentTarget.dataset.rank;
    if (newSelected != this.state.selectedPlayer) {
      this.setState({ selectedPlayer: newSelected, selectedAbility: null });
    }
  },
  changeSelectedAbility: function(e) {
    if (e.target != e.currentTarget)
      this.setState({ selectedAbility: e.target.dataset.rank });
  },
  render: function() {
    return (
      <div className="window">
        <Board 
          party={ this.props.party } 
          handleSelection={ this.changeSelectedPlayer } 
          curSelected={this.state.selectedPlayer} />
        <Menu current={ this.props.party[this.state.selectedPlayer] }
              curAbility={this.state.selectedAbility} 
              handleSelection={this.changeSelectedAbility} />
      </div>
    );
  }
});