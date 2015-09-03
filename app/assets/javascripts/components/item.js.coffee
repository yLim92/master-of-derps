@Item = React.createClass
  render: ->
    React.DOM.tr null,
      React.DOM.td null, @props.item.id
      React.DOM.td null, @props.item.name
      React.DOM.td null, @props.item.created_at
      React.DOM.td null, @props.item.sub_category.name
      React.DOM.td null, @props.item.category.name
