var SelectBox = React.createClass({
  render: function() {
    var addOption = (function(props){
      var attr = "name";
      if (typeof(props.attribute) != 'undefined')
        attr = props.attribute;
      return function(option, index) {
        return <option key={ index } value={option[attr]}>{option[attr]}</option>;
      }
    })(this.props);

    return (
    <select>
      { this.props.options.map(addOption) }
    </select>
    )
  }
});
