import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class TraspasarJugador extends Component {

    url = Global.apiEjemplos;

    cajaidequipo = React.createRef();

    traspasarJugador = (e) => {
        e.preventDefault();
        console.log("hola")
        let idequipo = this.cajaidequipo.current.value;
        let request = "api/Jugadores/TraspasarJugador/" + this.props.idjugador + "/" + idequipo;
        axios.put(this.url + request).then(response=>{
            Swal.fire({
                icon:'success',
                title: 'Traspaso completado',
                timer: 3000,
                timerProgressBar: true
            }).then(()=>{
                this.props.loadjugadores();
            })
        })
    }



  render() {
    return (
        <div>
            <form onSubmit={this.traspasarJugador}>
                <label>Introduzca ID del nuevo equipo:</label>
                <input type='number' className='form-control' ref={this.cajaidequipo}></input>
                <button className="btn btn-primary">Confirmar</button>
            </form>
        </div>
    )
  }
}
