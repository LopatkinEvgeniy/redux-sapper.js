import React, { Component, PropTypes } from 'react';
import Cell from './Cell';

class Field extends Component {
  constructor(props) {
    super(props);

    const { fieldImmutable, fieldGenerateAction } = props;

    fieldGenerateAction({
      rowsCount: fieldImmutable.get('rowsCount'),
      colsCount: fieldImmutable.get('colsCount'),
      bombsFactor: fieldImmutable.get('bombsFactor'),
    });
  }

  render() {
    const { fieldImmutable, fieldOpenRowAction } = this.props;
    const rows = fieldImmutable.get('rows');

    return (
      <div className="field">
        {rows.map((row, rowKey) => (
          <div key={rowKey} className="field__row">
            {row.map((cell, cellKey) => (
              <Cell
                key={cellKey}
                cell={cell}
                rowKey={rowKey}
                cellKey={cellKey}
                fieldOpenRowAction={fieldOpenRowAction}
              />
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
  fieldOpenRowAction: PropTypes.func.isRequired,
};

export default Field;
