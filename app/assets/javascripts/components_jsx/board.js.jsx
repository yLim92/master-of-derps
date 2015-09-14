var Board = React.createClass ({
  renderPiece: function(piece, index) {
    var selected = (index == this.props.curSelected);
    return (<Piece 
              key={index} 
              piece={piece} 
              handleSelection={this.props.handleSelection} 
              rank={index} 
              selected={ selected }/>
    );
  },
  render: function() {
    return (
      <div className="board">
        <div className="side">
          { this.props.party.map(this.renderPiece) }
        </div>
        <div className="side">
          <div className="piece">Enemy 1</div>
          <div className="piece">Enemy 2</div>
          <div className="piece">Enemy 3</div>
        </div>
      </div>
    );
  }
});

var Piece = React.createClass({
  statusBarStyle: function(curr, max) {
    return {
      width: (curr * 100 / max) + "%",
    }
  },
  render: function() {
    var pieceClass = (this.props.selected) ? "piece selected" : "piece";
    return (
      <div className={pieceClass} onClick={this.props.handleSelection} data-rank={this.props.rank}>
        <div className="name">{ this.props.piece.name }</div>
        <div className="status">
          <div className="status-section health">
            <div className="status-bar" style={ this.statusBarStyle(this.props.piece.curHealth, this.props.piece.maxHealth) }></div>
            <div className="status-display">{ this.props.piece.curHealth }/{ this.props.piece.maxHealth }</div>
          </div>
          <div className="status-section energy">
            <div className="status-bar" style={ this.statusBarStyle(this.props.piece.curEnergy, this.props.piece.maxEnergy) }></div>
            <div className="status-display">{ this.props.piece.curEnergy }/{ this.props.piece.maxEnergy }</div>
          </div>
        </div>
      </div>
    )
  }
})