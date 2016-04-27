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
    const {
      fieldOpenRowAction,
      fieldClickOnBombAction,
      rowKey,
      cellKey,
      cell,
      isBlocked,
    } = this.props;

    if (isBlocked) {
      return false;
    }

    if (cell.status === CELL_STATUS_OPENED) {
      return false;
    }

    if (cell.hasBomb) {
      return fieldClickOnBombAction();
    }

    return fieldOpenRowAction({ rowKey, cellKey });
  }

  getCellContent(cell) {
    const status = cell.status;

    switch (status) {
      case CELL_STATUS_OPENED: {
        if (cell.hasBomb) {
          return 'B';
        }

        if (cell.bombsAroundCount > 0) {
          return cell.bombsAroundCount;
        }

        return null;
      }

      default: {
        return null;
      }
    }
  }

  render() {
    const { cell } = this.props;
    const isOpened = cell.status === CELL_STATUS_OPENED;
    const hasBomb = cell.hasBomb;
    let className = 'field__cell';

    if (isOpened) {
      className += ' field__cell_opened';

      if (hasBomb) {
        className += ' field__cell_bombed';
      }
    }

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
  fieldClickOnBombAction: PropTypes.func.isRequired,
  isBlocked: PropTypes.bool.isRequired,
};

export default Cell;
