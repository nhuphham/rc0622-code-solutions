import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      switch: false
    };
    this.clock = this.clock.bind(this);
    this.reset = this.reset.bind(this);
  }

  clock() {
    if (!this.state.switch) {
      this.setState({ switch: true });
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    } else if (this.state.switch) {
      this.setState({ switch: false });
      clearInterval(this.timer);
    }
  }

  reset() {
    if (this.state.switch === false) {
      this.setState({ time: 0 });
    }
  }

  render() {
    const image = this.state.switch === false ? '../images/play.png' : '../images/pause.png';
    return (
      <div>
        <div className='circle' onClick={this.reset}>
          <h1 className='number'>{this.state.time}</h1>
        </div>
        <img src={image} className='images' onClick={this.clock} />
      </div>
    );
  }
}
