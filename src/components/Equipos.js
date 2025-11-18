import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import imagen from "../assets/images/loading.gif";

export default class Equipos extends Component {
  url = Global.apiEjemplos;

  state = {
    equipos: [],
    status: false,
  };

  loadEquipos = () => {
    let request = "api/Equipos";
    axios.get(this.url + request).then((response) => {
      this.setState({
        equipos: response.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadEquipos();
  };

  render() {
    return (
      <div className="container-custom fade-in">
        {!this.state.status ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <img src={imagen} style={{ width: "150px" }}></img>
          </div>
        ) : (
          <div>
            <div className="text-center mb-5">
              <h1
                className="display-4 fw-bold mb-3"
                style={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                🏆 Equipos de Fútbol
              </h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem" }}>
                Gestiona tus equipos favoritos
              </p>
            </div>
            <div className="row g-4">
              {this.state.equipos.map((equipo, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 col-xl-3"
                  >
                    <div
                      className="card h-100 border-0 card-hover"
                      style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        background: "white",
                      }}
                    >
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea20 0%, #764ba220 100%)",
                          padding: "2rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "200px",
                        }}
                      >
                        <img
                          src={equipo.imagen}
                          className="img-fluid"
                          style={{
                            maxWidth: "120px",
                            maxHeight: "150px",
                            objectFit: "contain",
                            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                          }}
                          alt={equipo.nombre}
                        ></img>
                      </div>
                      <div className="card-body p-4">
                        <h5
                          className="card-title fw-bold mb-3"
                          style={{
                            color: "#2d3748",
                            fontSize: "1.3rem",
                          }}
                        >
                          {equipo.nombre}
                        </h5>
                        <div
                          className="d-flex align-items-center mb-3"
                          style={{
                            padding: "0.8rem",
                            background:
                              "linear-gradient(135deg, #667eea15 0%, #764ba215 100%)",
                            borderRadius: "12px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          >
                            🏆
                          </span>
                          <span
                            className="fw-bold"
                            style={{ color: "#667eea" }}
                          >
                            {equipo.champions} Champions
                          </span>
                        </div>
                        <a
                          href={equipo.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block mb-3"
                          style={{
                            color: "#667eea",
                            textDecoration: "none",
                            fontSize: "0.95rem",
                          }}
                        >
                          🌐 Sitio web oficial
                        </a>
                        <div className="d-grid gap-2">
                          <NavLink
                            to={"/jugadores/" + equipo.idEquipo}
                            className="btn"
                            style={{
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              color: "white",
                              border: "none",
                              padding: "0.7rem",
                              borderRadius: "12px",
                              fontWeight: "600",
                              transition: "all 0.3s",
                            }}
                          >
                            👥 Ver Jugadores
                          </NavLink>
                          <NavLink
                            to={"/createjugador/" + equipo.idEquipo}
                            className="btn"
                            style={{
                              background:
                                "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                              color: "white",
                              border: "none",
                              padding: "0.7rem",
                              borderRadius: "12px",
                              fontWeight: "600",
                              transition: "all 0.3s",
                            }}
                          >
                            ➕ Añadir Jugador
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
