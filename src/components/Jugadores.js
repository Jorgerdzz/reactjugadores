import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import JugadorDetalle from './JugadorDetalle';

export default class Jugadores extends Component {

    url = Global.apiEjemplos;

    state = {
        jugadores: [],
        idJugador: 0
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

    mostrarJugador = (id) => {
        this.setState({
            idJugador: id
        })
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
                                <td><button onClick={ () => {
                                    this.mostrarJugador(jugador.idJugador)
                                }} className='btn btn-success'>Detalles</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            this.state.idJugador != 0 &&
            <JugadorDetalle idjugador={this.state.idJugador}/>
        }
      </div>
    )
  }
}
