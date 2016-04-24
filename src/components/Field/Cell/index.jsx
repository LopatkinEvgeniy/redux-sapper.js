import React, { Component, PropTypes } from 'react';
import {
  // CELL_STATUS_CLOSED,
  CELL_STATUS_OPENED,
  // CELL_STATUS_QUESTION,
  // CELL_STATUS_MARK,
} from '../../../constants/field';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { fieldOpenRowAction, rowKey, cellKey } = this.props;

    fieldOpenRowAction({ rowKey, cellKey });
  }

  getCellContent(cell) {
    const status = cell.status;

    switch (status) {
      case CELL_STATUS_OPENED: {
        return cell.hasBomb ? 'B' : cell.bombsAroundCount;
      }

      default: {
        return null;
      }
    }
  }

  render() {
    const { cell } = this.props;
    const isOpened = cell.status === CELL_STATUS_OPENED;
    const className = `field__cell${isOpened ? ' field__cell_opened' : ''}`;


    return (
      <div className={className} onClick={this.onClick}>
        {this.getCellContent(cell)}
      </div>
    );
  }
}

Cell.propTypes = {
  rowKey: PropTypes.number.isRequired,
  cellKey: PropTypes.number.isRequired,
  cell: PropTypes.object.isRequired,
  fieldOpenRowAction: PropTypes.func.isRequired,
};

export default Cell;
