import React from 'react';
export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let obj = {};
    const password = this.state.value.length;
    if (password < 1) {
      obj = {
        xMark: 'fa-solid fa-xmark x-mark',
        cMark: 'hidden',
        noText: 'red-text',
        shortText: 'hidden'
      };
    } else if (password < 8) {
      obj = {
        xMark: 'fa-solid fa-xmark x-mark',
        cMark: 'hidden',
        noText: 'hidden',
        shortText: 'red-text'
      };
    } else {
      obj = {
        xMark: 'hidden',
        cMark: 'fa-solid fa-check check-mark',
        noText: 'hidden',
        shortText: 'hidden'
      };
    }
    return (
      <div>
        <form>
          <div>
            <label htmlFor='password'>Password</label>
          </div>
          <div>
            <input type='password' id='password' value={this.state.value} onChange={this.handleChange} name='password' />
            <i className={obj.xMark} />
            <i className={obj.cMark} />
          </div>
        </form>
        <h6 className={obj.noText}>A password is required.</h6>
        <h6 className={obj.shortText}>Your password is too short.</h6>
      </div>
    );
  }
}
