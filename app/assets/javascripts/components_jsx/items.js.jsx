var Items = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.items,
      categoryFilter: "",
      subCategoryFilter: "",
    }
  },
  filterItems: function() {
    var that = this;
    var filteredItems = this.props.items.filter(function(item) {
      return (that.state.categoryFilter.length == 0 ||  that.state.categoryFilter == item.category.id ) && 
             (that.state.subCategoryFilter.length == 0 || that.state.subCategoryFilter == item.sub_category.id);
    })
    this.setState({items: filteredItems});
  },
  filterItemsByCategory: function(e) {
    this.state.categoryFilter = e.target.value;
    this.filterItems();
  },
  filterItemsBySubCategory: function(e) {
    this.state.subCategoryFilter = e.target.value;
    this.filterItems();
  },
  render: function() {
    var rowItem = function(item) {
      return <Item key={item.id} item={item} />;
    }
    return (
    <div className="wrap">
      <div className="options col-sm-8 col-sm-offset-2">
        <label>Category Filter</label>
        <SelectBox options={this.props.categories} attribute="id" displayAttribute="name" defaultOption="true" handleChange={this.filterItemsByCategory} />
        <label>Sub-category Filter</label>
        <SelectBox options={this.props.sub_categories} attribute="id" displayAttribute="name" defaultOption="true" handleChange={this.filterItemsBySubCategory} />
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
              { this.state.items.map(rowItem) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
});