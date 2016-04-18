import React from 'react';
import Tooltip from '../Tooltip';

const GenerateForm = () => (
  <div>
    Generate form here!!!
  </div>
);

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
