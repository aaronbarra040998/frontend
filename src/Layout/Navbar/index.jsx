import { Component } from 'react';
import './Navbar.css';
import logo from "./logo_turk.svg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });  // Corrigiendo el error de sintaxis aquí
  };

  render() {
    return (
      <>
        <nav>
          <a href="/">
          <img className='logotip' src={logo} alt="Logo" />

          </a>
          <div>
            <ul id='navbar' className={this.state.clicked?"#navbar active":"#navbar"}>
              <li><a className='active' href="/preinscription">home</a></li>
              <li><a href="/">about</a></li>
              <li><a href="/">download</a></li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
