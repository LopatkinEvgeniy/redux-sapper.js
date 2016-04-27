import React, { Component, PropTypes } from 'react';
import Cell from './Cell';

class Field extends Component {
  constructor(props) {
    super(props);

    const { fieldState, fieldGenerateAction } = props;

    fieldGenerateAction({
      rowsCount: fieldState.rowsCount,
      colsCount: fieldState.colsCount,
      bombsFactor: fieldState.bombsFactor,
    });
  }

  render() {
    const { fieldState, fieldOpenRowAction, fieldClickOnBombAction } = this.props;
    const rows = fieldState.rows;

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
                isBlocked={fieldState.isBlocked}
                fieldOpenRowAction={fieldOpenRowAction}
                fieldClickOnBombAction={fieldClickOnBombAction}
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
  fieldState: PropTypes.object.isRequired,
  fieldGenerateAction: PropTypes.func.isRequired,
  fieldOpenRowAction: PropTypes.func.isRequired,
  fieldClickOnBombAction: PropTypes.func.isRequired,
};

export default Field;
