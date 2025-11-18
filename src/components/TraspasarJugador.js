import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export default class TraspasarJugador extends Component {
  url = Global.apiEjemplos;

  cajaidequipo = React.createRef();

  state = {
    status: false,
    idequipoorigen: 0,
  };

  traspasarJugador = (e) => {
    e.preventDefault();
    let idequipo = this.cajaidequipo.current.value;
    let request =
      "api/Jugadores/TraspasarJugador/" + this.props.idjugador + "/" + idequipo;
    axios.put(this.url + request).then((response) => {
      Swal.fire({
        icon: "success",
        title: "Traspaso completado",
        timer: 3000,
        timerProgressBar: true,
      }).then(() => {
        this.setState({
          status: true,
          idequipoorigen: this.props.idequipoorigen,
        });
      });
    });
  };

  render() {
    return (
      <div className="container-custom fade-in">
        {this.state.status && (
          <Navigate to={"/jugadores/" + this.cajaidequipo.current.value} />
        )}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="card border-0"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                background: "white",
                marginTop: "3rem",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <h1
                  className="fw-bold mb-0"
                  style={{ color: "white", fontSize: "2.5rem" }}
                >
                  🔄 Traspasar Jugador
                </h1>
              </div>
              <div className="p-4 p-md-5">
                <form onSubmit={this.traspasarJugador}>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      🆔 ID del nuevo equipo
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      ref={this.cajaidequipo}
                      placeholder="Introduce el ID del equipo destino"
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
                        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                      color: "white",
                      border: "none",
                      padding: "1rem",
                      borderRadius: "15px",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      transition: "all 0.3s",
                    }}
                  >
                    ✅ Confirmar Traspaso
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
