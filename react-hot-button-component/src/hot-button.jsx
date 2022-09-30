import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.clickCount = this.clickCount.bind(this);
  }

  clickCount() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    let btnClass = '';

    if (this.state.clicks <= 3) {
      btnClass = 'purple';
    } else if (this.state.clicks <= 6) {
      btnClass = 'light-purple';
    } else if (this.state.clicks <= 9) {
      btnClass = 'red';
    } else if (this.state.clicks <= 12) {
      btnClass = 'orange';
    } else if (this.state.clicks <= 15) {
      btnClass = 'yellow';
    } else {
      btnClass = 'white';
    }

    return <button className={btnClass} onClick={this.clickCount}>Hot Button</button>;
  }
}
