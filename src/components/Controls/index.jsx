import React, { Component, PropTypes } from 'react';
import Tooltip from '../Tooltip';

class GenerateForm extends Component {
  constructor(props) {
    super(props);

    this.generateField = this.generateField.bind(this);
  }

  generateField() {
    const { fieldGenerateAction } = this.props;

    const rowsCount = parseInt(this.refs.rowsCount.value, 10) || 20;
    const colsCount = parseInt(this.refs.colsCount.value, 10) || 30;
    const bombsFactor = +this.refs.bombsFactor.value;

    fieldGenerateAction({ rowsCount, colsCount, bombsFactor });
  }

  render() {
    return (
      <div className="generator">
        <div className="generator__row">
          <div className="generator__field-name">
            Rows:
          </div>
          <div className="generator__field">
            <select className="generator__select" type="text" ref="rowsCount">
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div className="generator__row">
          <div className="generator__field-name">
            Cols:
          </div>
          <div className="generator__field">
            <select className="generator__select" type="text" ref="colsCount">
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div className="generator__row">
          <div className="generator__field-name">
            Bombs rate:
          </div>
          <div className="generator__field">
            <select className="generator__select" type="text" ref="bombsFactor">
              <option value="0.02">0.02</option>
              <option value="0.05">0.05</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
            </select>
          </div>
        </div>
        <div className="generator__row generator__row_buttons">
          <button
            onClick={this.generateField}
            className="button button_flat_blue button_generate">
            generate
          </button>
        </div>
      </div>
    );
  }
}

// TODO: use immutable PropTypes
GenerateForm.propTypes = {
  fieldImmutable: PropTypes.object.isRequired,
  fieldGenerateAction: PropTypes.func.isRequired,
};

export default ({ fieldImmutable, fieldGenerateAction }) => (
  <div>
    <Tooltip
      overlay={<GenerateForm fieldImmutable={fieldImmutable} fieldGenerateAction={fieldGenerateAction} />}
      className="tooltip__content_filter"
    >
      <button className="button button_raised_blue">new</button>
    </Tooltip>
  </div>
);
