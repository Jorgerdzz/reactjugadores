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
        

    //   <div class="modal fade" id="traspasar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //         <div class="modal-dialog">
    //             <form>
    //                 <div class="modal-content">
    //                 <div class="modal-header">
    //                     <h1 class="modal-title fs-5" id="exampleModalLabel">Traspaso del jugador</h1>
    //                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                 </div>
    //                 <div class="modal-body">
    //                     <label>Introduzca ID del nuevo equipo:</label>
    //                     <input type='number' className='form-control' ref={this.cajaidequipo}></input>
    //                 </div>
    //                 <div class="modal-footer">
    //                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
    //                     <button onClick={this.traspasarJugador} type="button" class="btn btn-primary">Confirmar</button>
    //                 </div>
    //                 </div>
    //             </form>
                
    //         </div>
    //     </div>
    )
  }
}
