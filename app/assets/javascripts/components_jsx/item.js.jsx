var Item = React.createClass({
  render: function() {
    return (
    <tr>
      <td>{ this.props.item.id }</td>
      <td>{ this.props.item.name }</td>
      <td>{ this.props.item.created_at }</td>
      <td>{ this.props.item.sub_category.name }</td>
      <td>{ this.props.item.category.name }</td>
    </tr>);
  }
});