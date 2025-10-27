import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'

export default class Menu extends Component {

    cajanombre = React.createRef();

    state = {
        nombre: ""
    }

    actualizarNombre = (e) => {
        e.preventDefault();
        this.setState({nombre: this.cajanombre.current.value}, () => {
            setTimeout( () => {
                this.setState({
                    nombre: ""
                })
            }, 0)
        })
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={"/crearequipo"}>Crear equipo</NavLink>
            </li>
        </ul>
        <form onSubmit={this.actualizarNombre} className="d-flex w-25" role="search">
            <input className="form-control me-2" type="search" ref={this.cajanombre} placeholder="Buscar jugador por nombre..." aria-label="Search"/>
            <button className="btn btn-outline-success">Buscar</button>
        </form>
        {
            this.state.nombre != "" && 
            <Navigate to={"/buscarjugador/" + this.state.nombre}/>
        }
        </div>
    </div>
    </nav>
    )
  }
}
