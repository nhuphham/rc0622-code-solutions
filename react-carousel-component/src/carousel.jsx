import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      interval: null
    };
    this.handleRightArrow = this.handleRightArrow.bind(this);
    this.handleLeftArrow = this.handleLeftArrow.bind(this);
    this.dotsClick = this.dotsClick.bind(this);
    this.dots = this.dots.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        interval: setInterval(() => this.setState({
          imageIndex: this.state.imageIndex === this.props.images.length - 1 ? 0 : this.state.imageIndex + 1
        }), 3000)
      }
    );
  }

  handleRightArrow(event) {
    if (event.target.className === 'fa-solid fa-2xl fa-angle-right arrows') {
      clearInterval(this.state.interval);
      this.setState({
        imageIndex: this.state.imageIndex === this.props.images.length - 1 ? 0 : this.state.imageIndex + 1,
        interval: setInterval(() => this.setState({
          imageIndex: this.state.imageIndex === this.props.images.length - 1 ? 0 : this.state.imageIndex + 1
        }), 3000)
      });
    }
  }

  handleLeftArrow(event) {
    if (event.target.className === 'fa-solid fa-2xl fa-angle-left arrows') {
      clearInterval(this.state.interval);
      this.setState({
        imageIndex: this.state.imageIndex === 0 ? this.props.image.length - 1 : this.state.imageIndex - 1,
        interval: setInterval(() => this.setState({
          imageIndex: this.state.imageIndex === this.props.images.length - 1 ? 0 : this.state.imageIndex + 1
        }), 3000)
      });
    }
  }

  dots(props) {
    const images = props.images;
    return images.map(image => {
      const imageIndex = images.indexOf(image);
      const dotClass = (imageIndex === this.state.imageIndex) ? 'fas fa-circle fa-lg padding circles' : 'far fa-circle fa-lg padding circles';
      return (
        <i className={dotClass} onClick={this.dotsClick} key={imageIndex} id={imageIndex} />
      );
    });
  }

  dotsClick(event) {
    if (event.target.className === 'far fa-circle fa-lg padding circles') {
      this.setState({ imageIndex: Number(event.target.id) });
      clearInterval(this.state.interval);
      this.setState({
        interval: setInterval(
          () => this.setState(
            { imageIndex: (this.state.imageIndex === this.props.images.length - 1) ? 0 : this.state.imageIndex + 1 }),
          3000
        )
      });
    }
  }

  render() {
    const images = this.props.images;
    return (
      <div className='images-box'>
        <div className='row space-between align-center'>
          <i className="fa-solid fa-2xl fa-angle-left arrows" onClick={this.handleLeftArrow} />
          <img src={`../images/${images[this.state.imageIndex]}`} className='images' />
          <i className="fa-solid fa-2xl fa-angle-right arrows" onClick={this.handleRightArrow} />
        </div>
        <div className='row justify-center'>
          {this.dots(this.props)}
        </div>
      </div>
    );
  }
}
