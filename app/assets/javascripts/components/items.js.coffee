@Items = React.createClass
  render: ->
    React.DOM.div
      className: 'wrap'
      React.DOM.div
        className: 'options'
        React.createElement SelectBox
      React.DOM.div
        className: 'items row'
        React.DOM.div
          className: 'col-sm-8 col-sm-offset-2'
          React.DOM.table
            className: 'table table-striped table-bordered'
            React.DOM.thead
              React.DOM.tr
                React.DOM.th null, "id"
                React.DOM.th null, "name"
                React.DOM.th null, "created_at"
                React.DOM.th null, "sub_category"
                React.DOM.th null, "category"
            React.DOM.tbody
              for item in @props.data
                React.createElement Item, key: item.id, item: item