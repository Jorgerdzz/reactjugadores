import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import JugadorDetalle from './JugadorDetalle';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {

    url = Global.apiEjemplos;

    state = {
        jugadores: [],
    }

    loadJugadores = () => {
        let request = "api/Jugadores/JugadoresEquipos/" + this.props.idequipo
        axios.get(this.url + request).then(response => {
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

  render() {
    return (
      <div>
        <h1 className='text-center'>Jugadores</h1>
        <table className='table table-dark table-striped table-hover'>
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th>POSICIÓN</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.jugadores.map((jugador, index) => {
                        return(
                            <tr key={index}>
                                <td>{jugador.nombre}</td>
                                <td>{jugador.posicion}</td>
                                <td><NavLink to={"/jugador/" + jugador.idJugador} className='btn btn-success'>Detalles</NavLink></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
