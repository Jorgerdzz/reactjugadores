import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class CreateJugador extends Component {

    url = Global.apiEjemplos

    cajaidjugador = React.createRef();
    cajanombre = React.createRef();
    cajaposicion = React.createRef();
    cajaimagen = React.createRef();
    cajafechanacimiento = React.createRef();
    cajapais = React.createRef();

    state = {
        status: false
    }

    insertJugador = (e) => {
        e.preventDefault();
        let jugador = {
            idJugador: parseInt(this.cajaidjugador.current.value),
            nombre: this.cajanombre.current.value,
            posicion: this.cajaposicion.current.value,
            imagen: this.cajaimagen.current.value,
            fechaNacimiento: this.cajafechanacimiento.current.value,
            pais: this.cajapais.current.value,
            idEquipo: parseInt(this.props.idequipo)
        }
        let request = "api/Jugadores";
        axios.post(this.url+request, jugador).then(response=>{
            Swal.fire({
                icon: 'success',
                title: 'Jugador insertado correctamente',
                timer: 3000,
                timerProgressBar: true
            }).then(() => {
                this.setState({
                    status:true
                })
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.status &&
            <Navigate to={"/jugadores/" + this.props.idequipo}/>
        }
        <h1>Añadir jugador</h1>
        <form onSubmit={this.insertJugador}>
            <label>ID Jugador:</label>
            <input type='number' ref={this.cajaidjugador} className='form-control'></input>
            <label>Nombre:</label>
            <input type='text' ref={this.cajanombre} className='form-control'></input>
            <label>Posición:</label>
            <input type='text' ref={this.cajaposicion} className='form-control'></input>
            <label>Imagen:</label>
            <input type='file' ref={this.cajaimagen} className='form-control'></input>
            <label>Fecha nacimiento:</label>
            <input type='text' ref={this.cajafechanacimiento} className='form-control'></input>
            <label>Pais:</label>
            <input type='text' ref={this.cajapais} className='form-control'></input>
            <button className='btn btn-primary mt-2'>Añadir jugador</button>
        </form>
      </div>
    )
  }
}
