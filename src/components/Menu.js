import React, { Component } from "react";
import { Navigate, NavLink } from "react-router-dom";

export default class Menu extends Component {
  cajanombre = React.createRef();

  state = {
    nombre: "",
  };

  actualizarNombre = (e) => {
    e.preventDefault();
    this.setState({ nombre: this.cajanombre.current.value }, () => {
      setTimeout(() => {
        this.setState({
          nombre: "",
        });
      }, 0);
    });
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "1rem 0",
        }}
      >
        <div className="container-fluid px-4">
          <NavLink
            className="navbar-brand fw-bold"
            to={"/"}
            style={{
              color: "white",
              fontSize: "1.5rem",
              letterSpacing: "1px",
            }}
          >
            ⚽ FutbolManager
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "white" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-semibold"
                  aria-current="page"
                  to={"/"}
                  style={{
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  🏠 Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-semibold"
                  to={"/crearequipo"}
                  style={{
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  ➕ Crear Equipo
                </NavLink>
              </li>
            </ul>
            <form
              onSubmit={this.actualizarNombre}
              className="d-flex"
              role="search"
              style={{ minWidth: "300px" }}
            >
              <input
                className="form-control me-2"
                type="search"
                ref={this.cajanombre}
                placeholder="Buscar jugador..."
                aria-label="Search"
                style={{
                  borderRadius: "25px",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              />
              <button
                className="btn"
                style={{
                  background: "white",
                  color: "#667eea",
                  borderRadius: "25px",
                  padding: "0.6rem 1.5rem",
                  fontWeight: "600",
                  border: "none",
                  transition: "all 0.3s",
                }}
              >
                🔍 Buscar
              </button>
            </form>
            {this.state.nombre != "" && (
              <Navigate to={"/buscarjugador/" + this.state.nombre} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}
