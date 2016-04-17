import React, { Component, PropTypes } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);

    props.fieldGenerateAction({
      rowsCount: 20,
      colsCount: 30,
      bombsFactor: 0.2,
    });
  }

  getCellContent(cell) {
    return cell.get('hasBomb') ? 'B' : cell.get('bombsAroundCount');
  }

  render() {
    const { fieldImmutable } = this.props;
    const rows = fieldImmutable.get('rows');

    return (
      <div className="field">
        {rows.map((row, rowKey) => (
          <div key={rowKey} className="field__row">
            {row.map((cell, cellKey) => (
              <div key={cellKey} className="field__cell">
                {this.getCellContent(cell)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

// TODO: use immutable PropTypes
Field.propTypes = {
  fieldImmutable: PropTypes.object.isRequired,
  fieldGenerateAction: PropTypes.func.isRequired,
};

export default Field;
