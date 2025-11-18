import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export default class CreateJugador extends Component {
  url = Global.apiEjemplos;

  cajaidjugador = React.createRef();
  cajanombre = React.createRef();
  cajaposicion = React.createRef();
  cajaimagen = React.createRef();
  cajafechanacimiento = React.createRef();
  cajapais = React.createRef();

  state = {
    status: false,
  };

  insertJugador = (e) => {
    e.preventDefault();
    let jugador = {
      idJugador: parseInt(this.cajaidjugador.current.value),
      nombre: this.cajanombre.current.value,
      posicion: this.cajaposicion.current.value,
      imagen: this.cajaimagen.current.value,
      fechaNacimiento: this.cajafechanacimiento.current.value,
      pais: this.cajapais.current.value,
      idEquipo: parseInt(this.props.idequipo),
    };
    let request = "api/Jugadores";
    axios.post(this.url + request, jugador).then((response) => {
      Swal.fire({
        icon: "success",
        title: "Jugador insertado correctamente",
        timer: 3000,
        timerProgressBar: true,
      }).then(() => {
        this.setState({
          status: true,
        });
      });
    });
  };

  render() {
    return (
      <div className="container-custom fade-in">
        {this.state.status && (
          <Navigate to={"/jugadores/" + this.props.idequipo} />
        )}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="card border-0"
              style={{
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <h1
                  className="fw-bold mb-0"
                  style={{ color: "white", fontSize: "2.5rem" }}
                >
                  ➕ Añadir Nuevo Jugador
                </h1>
              </div>
              <div
                className="card-body p-4 p-md-5"
                style={{ background: "white" }}
              >
                <form onSubmit={this.insertJugador}>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      🆔 ID Jugador
                    </label>
                    <input
                      type="number"
                      ref={this.cajaidjugador}
                      className="form-control"
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      👤 Nombre del Jugador
                    </label>
                    <input
                      type="text"
                      ref={this.cajanombre}
                      className="form-control"
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      ⚽ Posición
                    </label>
                    <input
                      type="text"
                      ref={this.cajaposicion}
                      className="form-control"
                      placeholder="Ej: Delantero, Defensa, Portero..."
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      🖼️ Imagen (URL)
                    </label>
                    <input
                      type="text"
                      ref={this.cajaimagen}
                      className="form-control"
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      📅 Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      ref={this.cajafechanacimiento}
                      className="form-control"
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      🌍 País
                    </label>
                    <input
                      type="text"
                      ref={this.cajapais}
                      className="form-control"
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></input>
                  </div>
                  <button
                    className="btn d-block w-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                      color: "white",
                      border: "none",
                      padding: "1rem",
                      borderRadius: "15px",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      marginTop: "2rem",
                      transition: "all 0.3s",
                    }}
                  >
                    ✅ Añadir Jugador
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
