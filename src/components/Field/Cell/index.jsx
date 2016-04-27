import React, { Component, PropTypes } from 'react';
import {
  // CELL_STATUS_CLOSED,
  CELL_STATUS_OPENED,
  // CELL_STATUS_QUESTION,
  // CELL_STATUS_MARK,
  GAME_STATUS_WIN,
  GAME_STATUS_LOOSE,
  GAME_STATUS_GAME,
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
      gameStatus,
    } = this.props;

    if (gameStatus !== GAME_STATUS_GAME) {
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

  getCellContent(cell, gameStatus) {
    const status = cell.status;

    switch (status) {
      case CELL_STATUS_OPENED: {
        if (cell.hasBomb) {
          if (gameStatus === GAME_STATUS_WIN) {
            return String.fromCharCode(10004);
          }

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
    const { cell, gameStatus } = this.props;
    const isOpened = cell.status === CELL_STATUS_OPENED;
    const hasBomb = cell.hasBomb;
    let className = 'field__cell';

    if (isOpened) {
      className += ' field__cell_opened';

      if (hasBomb && gameStatus === GAME_STATUS_LOOSE) {
        className += ' field__cell_bombed';
      } else if (hasBomb && gameStatus === GAME_STATUS_WIN) {
        className += ' field__cell_founded';
      }
    }

    return (
      <div className={className} onClick={this.onClick}>
        {this.getCellContent(cell, gameStatus)}
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
  gameStatus: PropTypes.string.isRequired,
};

export default Cell;
