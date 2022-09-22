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
    if (this.state.clicks <= 3) {
      return <button className="purple" onClick={this.clickCount}>Hot Button</button>;
    } else if (this.state.clicks <= 6) {
      return <button className="light-purple" onClick={this.clickCount}>Hot Button</button>;
    } else if (this.state.clicks <= 9) {
      return <button className="red" onClick={this.clickCount}>Hot Button</button>;
    } else if (this.state.clicks <= 12) {
      return <button className="orange" onClick={this.clickCount}>Hot Button</button>;
    } else if (this.state.clicks <= 15) {
      return <button className="yellow" onClick={this.clickCount}>Hot Button</button>;
    } else {
      return <button className="white" onClick={this.clickCount}>Hot Button</button>;
    }
  }
}
