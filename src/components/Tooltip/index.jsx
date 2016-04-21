import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.toggleHide = this.toggleHide.bind(this);
  }

  componentDidMount() {
    this.handleClickBinded = this.handleClick.bind(this);

    document.addEventListener('click', this.handleClickBinded, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickBinded, false);
  }

  handleClick(event) {
    try {
      if (!findDOMNode(this).contains(event.target)) {
        if (!this.state.isHidden) {
          this.toggleHide();
        }
      }
    } catch (error) {
      // do nothing, ie fix
    }
  }

  toggleHide() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    const { className = '', children, overlay } = this.props;

    return (
      <div className="tooltip">
        <div onClick={this.toggleHide}>
          {children}
        </div>

        {this.state.isHidden ? null : (
          <div className={`tooltip__content ${className}`}>
            {overlay}
          </div>
        )}
      </div>
    );
  }
}

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.required,
  overlay: PropTypes.object.required,
};

export default Tooltip;
