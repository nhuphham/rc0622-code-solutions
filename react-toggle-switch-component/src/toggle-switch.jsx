import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  wording() {
    if (this.state.toggle) {
      return {
        text: 'Off',
        outerDiv: 'outer',
        circleDiv: 'circle'
      };
    }
    return {
      text: 'On',
      outerDiv: 'outer outer-on',
      circleDiv: 'circle circle-on'
    };
  }

  render() {
    const wording = this.wording();
    return (
      <div onClick={this.toggle}>
        <div className={wording.outerDiv}>
          <div className={wording.circleDiv} />
        </div>
        <h4 className="text">{wording.text}</h4>
      </div>
    );
  }
}
