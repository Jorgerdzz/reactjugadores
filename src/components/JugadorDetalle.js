import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class JugadorDetalle extends Component {

    url = Global.apiEjemplos;

    state = {
        jugador: [],
    }

    loadJugador = () => {
        let request = "api/Jugadores/" + this.props.idjugador;
        axios.get(this.url + request).then(response => {
            this.setState({
                jugador: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idjugador != this.props.idjugador){
            this.loadJugador();
        }
    }

  render() {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card m-4" style={{width: "18rem"}}>
                <img src={this.state.jugador.imagen} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.state.jugador.nombre}</h5>
                    <p className="card-text">Posicion: {this.state.jugador.posicion}</p>
                    <p className="card-text">Pais: {this.state.jugador.pais}</p>
                    <p className="card-text">Fecha nacimiento: {this.state.jugador.fechaNacimiento}</p>
                    <NavLink to={"/jugadores/" + this.state.jugador.idEquipo} className="btn btn-primary">VOLVER</NavLink>
                </div>
            </div>
        </div>
    )
  }
}
