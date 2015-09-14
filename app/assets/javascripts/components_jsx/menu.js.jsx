var Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul className="tabs">
          <li className="active">Abilities</li>
          <li>Elixir</li>
          <li>Inspect</li>
        </ul>
        <div className="content">
          <Menu.Abilities abilities={ this.props.current.abilities } 
                          handleSelection={this.props.handleSelection}
                          curAbility={this.props.curAbility} />
        </div>
      </div>
    )
  }
});