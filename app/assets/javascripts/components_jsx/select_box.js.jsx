var SelectBox = React.createClass({

  render: function() {
    var addOption = (function(props){
      var attr = "name",
          displayAttr = attr;
      if (typeof(props.attribute) != 'undefined')
        attr = props.attribute;
      if (typeof(props.displayAttribute) != 'undefined')
        displayAttr = props.displayAttribute;
      return function(option, index) {
        return <option key={ index } value={option[attr]}>{option[displayAttr]}</option>;
      }
    })(this.props);

    return (
    <select onChange={ this.props.handleChange }>
      { this.props.defaultOption && <option value="">--</option> }
      { this.props.options.map(addOption) }
    </select>
    )
  }
});
