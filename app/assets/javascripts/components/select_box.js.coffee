@SelectBox = React.createClass
  render: ->
    React.DOM.select null,
      React.DOM.option
        value: "volvo"
        "Volvo"
      React.DOM.option
        value: "saab"
        "Saab"