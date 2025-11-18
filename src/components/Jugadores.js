import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default class Jugadores extends Component {
  url = Global.apiEjemplos;

  state = {
    jugadores: [],
  };

  botonEliminar = React.createRef();

  loadJugadores = () => {
    let request = "api/Jugadores/JugadoresEquipos/" + this.props.idequipo;
    axios.get(this.url + request).then((response) => {
      this.setState({
        jugadores: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadJugadores();
  };

  deleteJugador = () => {
    Swal.fire({
      icon: "question",
      title: "¿Desea eliminar al jugador?",
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let id = this.botonEliminar.current.value;
        let request = "api/Jugadores/" + id;
        axios.delete(this.url + request).then((response) => {
          Swal.fire({
            icon: "success",
            title: "Jugador eliminado correctamente",
            timer: 3000,
            timerProgressBar: true,
          }).then(() => {
            this.loadJugadores();
          });
        });
      }
    });
  };

  render() {
    return (
      <div className="container-custom fade-in">
        <div className="mb-5 text-center">
          <h1
            className="display-4 fw-bold"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            ⚽ Plantilla de Jugadores
          </h1>
        </div>
        <div
          className="card border-0"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          }}
        >
          <div className="table-responsive">
            <table
              className="table table-hover mb-0"
              style={{
                background: "white",
              }}
            >
              <thead
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                }}
              >
                <tr>
                  <th
                    style={{
                      padding: "1.2rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderBottom: "none",
                    }}
                  >
                    NOMBRE
                  </th>
                  <th
                    style={{
                      padding: "1.2rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderBottom: "none",
                    }}
                  >
                    POSICIÓN
                  </th>
                  <th
                    style={{
                      padding: "1.2rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderBottom: "none",
                    }}
                  >
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.jugadores.map((jugador, index) => {
                  return (
                    <tr
                      key={index}
                      style={{
                        transition: "all 0.3s",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <td
                        style={{
                          padding: "1.2rem",
                          fontWeight: "500",
                          color: "#2d3748",
                        }}
                      >
                        {jugador.nombre}
                      </td>
                      <td style={{ padding: "1.2rem", color: "#718096" }}>
                        <span
                          style={{
                            padding: "0.4rem 1rem",
                            background:
                              "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                            borderRadius: "20px",
                            color: "#667eea",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                          }}
                        >
                          {jugador.posicion}
                        </span>
                      </td>
                      <td style={{ padding: "1.2rem" }}>
                        <NavLink
                          to={"/jugador/" + jugador.idJugador}
                          className="btn me-2"
                          style={{
                            background:
                              "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                            color: "white",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "10px",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            transition: "all 0.3s",
                            textDecoration: "none",
                          }}
                        >
                          📋 Detalles
                        </NavLink>
                        <NavLink
                          to={
                            "/traspasarjugador/" +
                            jugador.idJugador +
                            "/" +
                            this.props.idequipo
                          }
                          className="btn me-2"
                          style={{
                            background:
                              "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                            color: "white",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "10px",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            transition: "all 0.3s",
                            textDecoration: "none",
                          }}
                        >
                          🔄 Traspasar
                        </NavLink>
                        <button
                          onClick={this.deleteJugador}
                          value={jugador.idJugador}
                          ref={this.botonEliminar}
                          className="btn"
                          style={{
                            background:
                              "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
                            color: "white",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "10px",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            transition: "all 0.3s",
                          }}
                        >
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
