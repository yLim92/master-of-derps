var Items = React.createClass({
  render: function() {
    var rowItem = function(item) {
      return <Item key={item.id} item={item} />;
    }
    return (
    <div className="wrap">
      <div className="options">
        <SelectBox options={this.props.categories} attribute="name" />
        <SelectBox options={this.props.sub_categories} attribute="name" />
      </div>
      <div className="items row">
        <div className="col-sm-8 col-sm-offset-2">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>created_at</th>
                <th>sub_category</th>
                <th>category</th>
              </tr>
            </thead>
            <tbody>
              { this.props.items.map(rowItem) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
});