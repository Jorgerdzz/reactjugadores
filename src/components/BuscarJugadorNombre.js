import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class BuscarJugadorNombre extends Component {

    url = Global.apiEjemplos;

    state = {
        jugadores: []
    }

    loadJugadorNombre = () => {
        let request = "api/Jugadores/FindJugadores/" + this.props.nombre;
        console.log(request)
        axios.get(this.url + request).then(response=>{
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadorNombre();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.nombre != this.props.nombre){
            this.loadJugadorNombre();
        }
    }

  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>Jugadores</h1>
        <table className='table table-primary table-striped table-hover'>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Pais</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.jugadores.map((jugador, index)=>{
                        return(
                            <tr>
                                <td><img src={jugador.imagen} style={{width: "100px"}}/></td>
                                <td>{jugador.nombre}</td>
                                <td>{jugador.posicion}</td>
                                <td>{jugador.pais}</td>
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
