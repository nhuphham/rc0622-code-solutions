import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.langBoxes = this.langBoxes.bind(this);
  }

  handleClick(event) {
    if (event.target.textContent === this.state.lang) {
      this.setState({ lang: '' });
    } else {
      this.setState({ lang: event.target.textContent });
    }
  }

  langBoxes(props) {
    const languages = props.languages;
    return languages.map(lang => {
      const hiddenDes = lang.name === this.state.lang ? '' : 'hidden';
      return (
        <li key={lang.name}>
          <div className='row'>
            <div className='box' onClick={this.handleClick}>
              <h3>{lang.name}</h3>
            </div>
          </div>
          <div className='row'>
            <div className={`descript-box ${hiddenDes}`}>
              <p>{lang.description}</p>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>{this.langBoxes(this.props)}</ul>
    );
  }
}
