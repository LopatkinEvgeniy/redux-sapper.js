import React, { Component } from 'react';
import Tooltip from '../Tooltip';

class GenerateForm extends Component {
  constructor(props) {
    super(props);

    this.generateField = this.generateField.bind(this);
  }

  generateField() {
    const rows = parseInt(this.refs.rows.value, 10) || 20;
    const cols = parseInt(this.refs.cols.value, 10) || 30;
    const bombsRate = this.refs.bombsRate.value;

    console.log(rows, cols, bombsRate);
  }

  render() {
    return (
      <div className="generator">
        <div className="generator__row">
          <div className="generator__field-name">
            Rows:
          </div>
          <div className="generator__field">
            <input type="text" ref="rows" />
          </div>
        </div>
        <div className="generator__row">
          <div className="generator__field-name">
            Cols:
          </div>
          <div className="generator__field">
            <input type="text" ref="cols" />
          </div>
        </div>
        <div className="generator__row">
          <div className="generator__field-name">
            Bombs rate:
          </div>
          <div className="generator__field">
            <select className="generator__select" type="text" ref="bombsRate">
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

export default () => (
  <div>
    <Tooltip
      overlay={<GenerateForm />}
      className="tooltip__content_filter"
    >
      <button className="button button_raised_blue">new</button>
    </Tooltip>
  </div>
);
