import React from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#main');
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      email: '',
      password: ''
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
    this.setState = ({ email, password });
    console.log(this.state);
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
          <h1>Hi, Please Login Here.</h1>
          <form onSubmit={this.onSubmit}>
            <input type="email" onChange={this.onEmailChange} id="email" value={this.state.email} placeholder=" email@email.com" />
            <input type="password" onChange={this.onPasswordChange} id="password" value={this.state.password} placeholder='please keep your passwords safe' />
            <button>Login</button>
          </form>
        </Modal>
        <button onClick={this.onClick}>open modal</button>
      </div>
    )
  }
}