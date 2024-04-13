import { useState } from "react";
import './styles.css';
import logo from "./logo.svg";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
    <section className="page modal-1-page">
      <div
        className={`modal-1-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div className="modal-1-modal">
          <header>
            <h2>Preinscription</h2>
            <h3>Solo ingrese su correo</h3>
          </header>
          <form onClick={(e) => e.stopPropagation()}>
            <div className="textbox">
              
              <input type="email" placeholder="Email" />
            </div>

            <button
              className="signup-button"
              type="submit"
              onClick={toggleModal}
              style={{ backgroundColor: "#161022" }} // Cambio aquí
            >
              <p>ENVIAR</p>
            </button>

          </form>
          <p></p>
        </div>
      </div>
      <footer className="modal-1-footer">
  <div className="container">
    <article>
      <h2>Preregistrate de manera rapida y gratis.</h2>
      <button
        className="signup-button"
        type="button"
                onClick={toggleModal}
                style={{ backgroundColor: "#18181a" }}
      >
        <p>Preregistro free</p>
      </button>
    </article>
    <section className="top">
            <img src={logo} alt="Logo" />
            <ul>
              <li>
                <h3>Resources</h3>
                <a>Usage</a>
                <a>Docs</a>
                <a>Support</a>
                <a>Hardware</a>
              </li>
              <li>
                <h3>Pricing</h3>
                <a>Overview</a>
                <a>Flexible Data</a>
                <a>High Volume</a>
                <a>Enterprise</a>
              </li>
              <li>
                <h3>Developers</h3>
                <a>Forum</a>
                <a>Projects</a>
                <a>Open Source</a>
                <a>GitHub</a>
              </li>
              <li>
                <h3>Company</h3>
                <a>About Us</a>
                <a>Blog</a>
                <a>Partnerships</a>
                <a>Careers</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
      </section>
      </>
  );
};
export default Modal;