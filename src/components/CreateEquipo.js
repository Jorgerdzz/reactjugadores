import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class CreateEquipo extends Component {
  url = Global.apiEjemplos;

  cajaid = React.createRef();
  cajanombre = React.createRef();
  cajaimagen = React.createRef();
  cajachampions = React.createRef();
  cajaweb = React.createRef();
  cajadescripcion = React.createRef();
  cajafinalista = React.createRef();

  insertEquipo = (e) => {
    e.preventDefault();
    let equipo = {
      idEquipo: parseInt(this.cajaid.current.value),
      nombre: this.cajanombre.current.value,
      imagen: this.cajaimagen.current.value,
      champions: parseInt(this.cajachampions.current.value),
      web: this.cajaweb.current.value,
      descripcion: this.cajadescripcion.current.value,
      finalista: parseInt(this.cajafinalista.current.value),
    };
    let request = "api/Equipos";
    axios.post(this.url + request, equipo).then((response) => {
      console.log("Insertado");
    });
  };

  render() {
    return (
      <div className="container-custom fade-in">
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
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <h1
                  className="fw-bold mb-0"
                  style={{ color: "white", fontSize: "2.5rem" }}
                >
                  ➕ Crear Nuevo Equipo
                </h1>
              </div>
              <div
                className="card-body p-4 p-md-5"
                style={{ background: "white" }}
              >
                <form onSubmit={this.insertEquipo}>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      🆔 ID Equipo
                    </label>
                    <input
                      type="number"
                      ref={this.cajaid}
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
                      ⚽ Nombre del Equipo
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
                      🏆 Champions Ganadas
                    </label>
                    <input
                      type="number"
                      ref={this.cajachampions}
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
                      🌐 Sitio Web
                    </label>
                    <input
                      type="url"
                      ref={this.cajaweb}
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
                      📝 Descripción
                    </label>
                    <textarea
                      ref={this.cajadescripcion}
                      className="form-control"
                      rows="3"
                      style={{
                        padding: "0.8rem 1.2rem",
                        borderRadius: "12px",
                        border: "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.3s",
                      }}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#2d3748", fontSize: "1.05rem" }}
                    >
                      🥈 Veces Finalista
                    </label>
                    <input
                      type="number"
                      ref={this.cajafinalista}
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
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
                    ✅ Insertar Equipo
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
