import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class JugadorDetalle extends Component {
  url = Global.apiEjemplos;

  state = {
    jugador: [],
  };

  loadJugador = () => {
    let request = "api/Jugadores/" + this.props.idjugador;
    axios.get(this.url + request).then((response) => {
      this.setState({
        jugador: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadJugador();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idjugador !== this.props.idjugador) {
      this.loadJugador();
    }
  };

  render() {
    return (
      <div className="container-custom fade-in">
        <div className="d-flex justify-content-center">
          <div
            className="card border-0"
            style={{
              width: "450px",
              borderRadius: "25px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "350px",
              }}
            >
              <img
                src={this.state.jugador.imagen}
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                  borderRadius: "15px",
                }}
                alt={this.state.jugador.nombre}
              ></img>
            </div>
            <div className="card-body p-4" style={{ background: "white" }}>
              <h2
                className="text-center fw-bold mb-4"
                style={{
                  color: "#2d3748",
                  fontSize: "2rem",
                }}
              >
                {this.state.jugador.nombre}
              </h2>

              <div
                className="mb-3 p-3"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                  borderRadius: "15px",
                  borderLeft: "4px solid #667eea",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <span style={{ fontSize: "1.3rem", marginRight: "0.8rem" }}>
                    ⚽
                  </span>
                  <strong style={{ color: "#2d3748", marginRight: "0.5rem" }}>
                    Posición:
                  </strong>
                  <span style={{ color: "#718096", fontSize: "1.05rem" }}>
                    {this.state.jugador.posicion}
                  </span>
                </div>
              </div>

              <div
                className="mb-3 p-3"
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe15 0%, #00f2fe15 100%)",
                  borderRadius: "15px",
                  borderLeft: "4px solid #4facfe",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <span style={{ fontSize: "1.3rem", marginRight: "0.8rem" }}>
                    🌍
                  </span>
                  <strong style={{ color: "#2d3748", marginRight: "0.5rem" }}>
                    País:
                  </strong>
                  <span style={{ color: "#718096", fontSize: "1.05rem" }}>
                    {this.state.jugador.pais}
                  </span>
                </div>
              </div>

              <div
                className="mb-4 p-3"
                style={{
                  background:
                    "linear-gradient(135deg, #fa709a15 0%, #fee14015 100%)",
                  borderRadius: "15px",
                  borderLeft: "4px solid #fa709a",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <span style={{ fontSize: "1.3rem", marginRight: "0.8rem" }}>
                    📅
                  </span>
                  <strong style={{ color: "#2d3748", marginRight: "0.5rem" }}>
                    Fecha nacimiento:
                  </strong>
                  <span style={{ color: "#718096", fontSize: "1.05rem" }}>
                    {this.state.jugador.fechaNacimiento}
                  </span>
                </div>
              </div>

              <NavLink
                to={"/jugadores/" + this.state.jugador.idEquipo}
                className="btn d-block"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "1rem",
                  borderRadius: "15px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  textAlign: "center",
                }}
              >
                ← VOLVER A PLANTILLA
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
