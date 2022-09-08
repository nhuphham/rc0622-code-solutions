import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBar: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      menuBar: !prevState.menuBar
    }));
  }

  render() {
    const menuBar = this.state.menuBar;
    const menuLines = menuBar ? '' : 'hidden';
    const menuModal = menuBar ? 'hidden' : '';
    return (
      <div>
        <div onClick={this.handleClick} className={menuLines}>
          <i className='fa-solid fa-bars bars' />
        </div>
        <div className={menuModal}>
          <div className="modal">
            <div className="modal-content">
              <h2>Menu</h2>
              <div onClick={this.handleClick}>
                <a href='#about'>About</a>
                <a href='#getStarted'>Get Started</a>
                <a href='#signIn'>Sign In</a>
              </div>
            </div>
          </div>
          <div className='grey-background' onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
