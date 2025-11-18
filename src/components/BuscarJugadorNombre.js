import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class BuscarJugadorNombre extends Component {
  url = Global.apiEjemplos;

  state = {
    jugadores: [],
  };

  loadJugadorNombre = () => {
    let request = "api/Jugadores/FindJugadores/" + this.props.nombre;
    console.log(request);
    axios.get(this.url + request).then((response) => {
      this.setState({
        jugadores: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadJugadorNombre();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.nombre != this.props.nombre) {
      this.loadJugadorNombre();
    }
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
            🔍 Resultados de Búsqueda
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem" }}>
            Jugadores encontrados: {this.state.jugadores.length}
          </p>
        </div>

        {this.state.jugadores.length === 0 ? (
          <div
            className="card border-0 text-center p-5"
            style={{
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              background: "white",
            }}
          >
            <h3 style={{ color: "#718096" }}>No se encontraron jugadores 😔</h3>
          </div>
        ) : (
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
                style={{ background: "white" }}
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
                      IMAGEN
                    </th>
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
                      PAÍS
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
                        <td style={{ padding: "1.2rem" }}>
                          <img
                            src={jugador.imagen}
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "12px",
                              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                            alt={jugador.nombre}
                          />
                        </td>
                        <td
                          style={{
                            padding: "1.2rem",
                            fontWeight: "600",
                            color: "#2d3748",
                            fontSize: "1.05rem",
                          }}
                        >
                          {jugador.nombre}
                        </td>
                        <td style={{ padding: "1.2rem" }}>
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
                        <td
                          style={{
                            padding: "1.2rem",
                            color: "#718096",
                            fontSize: "1.05rem",
                          }}
                        >
                          {jugador.pais}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
