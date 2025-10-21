import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

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
            finalista: parseInt(this.cajafinalista.current.value)
        }
        let request = "api/Equipos";
        axios.post(this.url + request, equipo).then(response => {
            console.log("Insertado");
        })
    }

  render() {
    return (
      <div style={{margin: "auto"}}>
        <h1>Crear equipo</h1>
        <form onSubmit={this.insertEquipo}>
            <label className='form-label'>ID Equipo: </label>
            <input type='number' ref={this.cajaid} className='form-control'></input>
            <label className='form-label'>Nombre: </label>
            <input type='text' ref={this.cajanombre} className='form-control'></input>
            <label className='form-label'>Imagen: </label>
            <input type='file' ref={this.cajaimagen} className='form-control'></input>
            <label className='form-label'>Champions: </label>
            <input type='number' ref={this.cajachampions} className='form-control'></input>
            <label className='form-label'>Web: </label>
            <input type='text' ref={this.cajaweb} className='form-control'></input>
            <label className='form-label'>descripcion: </label>
            <input type='text' ref={this.cajadescripcion} className='form-control'></input>
            <label className='form-label'>Finalista: </label>
            <input type='number' ref={this.cajafinalista} className='form-control'></input><br></br>
            <button className='btn btn-primary'>Insertar equipo</button>
        </form>
      </div>
    )
  }
}
