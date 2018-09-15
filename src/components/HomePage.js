import React from 'react';
import Modal from 'react-modal';
import validator from 'validator';


Modal.setAppElement('#main');
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      email: '',
      password: '',
      loggedIn: false
    }
    this.onClick = this.onClick.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

  }

  onClick() {
    this.setState({
      modalIsOpen: true
    });
  }
  onRequestClose() {
    this.setState({ modalIsOpen: false });
  }
  onSubmit(e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (validator.isEmail(email) && validator.isAlphanumeric(password)) {
      this.setState(() => ({
        email,
        password,
        loggedIn: true,
        modalIsOpen: false
      }));
    }

  }
  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }
  onPasswordChange(e) {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.onRequestClose}
        >
          <div>
            <h1>Hi, Please Login Here.</h1>
            <form onSubmit={this.onSubmit}>
              <input required type="email" onChange={this.onEmailChange} id="email" value={this.state.email} placeholder=" email@email.com" />
              <input required type="password" onChange={this.onPasswordChange} id="password" value={this.state.password} placeholder='please keep your passwords safe' />
              <button>Login</button>
            </form>
          </div>
        </Modal>
        {this.state.loggedIn && <em>you have successfully logged in!</em>}
        <button onClick={this.onClick}>open modal</button>
      </div>
    )
  }
}