Menu.Abilities = React.createClass({
  getInitialState: function() {
    return {
      selectedAbilityIndex: null,
    }
  },
  renderAbility: function(ability, index) {
    var selected = (this.props.curAbility == index);
    return <li key={index} 
              className={ selected ? "selected" : ""} 
              data-rank={index}
              data-code={ability.code} >{ ability.name }</li>;
  },
  render: function() {
    return(
      <ul onClick={this.props.handleSelection}>{ this.props.abilities.map(this.renderAbility) }</ul>
    )
  }
});